#version 330 core
layout(location = 0) out vec4 FragColor;

in vec2 TextureCoordinate;
in vec3 rawPosition;
in vec3 normal;

uniform sampler2D diffuseTexture;
uniform samplerCube diffuseCubeTexture;
// precomputed shadow
// Hint: You may want to uncomment this to use shader map texture.
// uniform sampler2DShadow shadowMap;
uniform int isCube;

layout (std140) uniform camera {
    // Projection * View matrix
    mat4 viewProjectionMatrix;
    // Position of the camera
    vec4 viewPosition;
};

layout (std140) uniform light {
    // Projection * View matrix
    mat4 lightSpaceMatrix;
    // Position or direction of the light
    vec4 lightVector;
    // inner cutoff, outer cutoff, isSpotlight, isDirectionalLight
    vec4 coefficients;
};

void main() {
    vec4 diffuseTextureColor = texture(diffuseTexture, TextureCoordinate);
    vec4 diffuseCubeTextureColor = texture(diffuseCubeTexture, rawPosition);
    vec3 color = isCube == 1 ? diffuseCubeTextureColor.rgb : diffuseTextureColor.rgb;
    // TODO: vertex shader / fragment shader
    // Hint:
    //       1. how to write a vertex shader:
    //          a. The output is gl_Position and anything you want to pass to the fragment shader. (Apply matrix multiplication yourself)
    //       2. how to write a fragment shader:
    //          a. The output is FragColor (any var is OK)
    //       3. colors
    //          a. For point light & directional light, lighting = ambient + attenuation * shadow * (diffuse + specular)
    //          b. If you want to implement multiple light sources, you may want to use lighting = shadow * attenuation * (ambient + (diffuse + specular))
    //       4. attenuation
    //          a. spotlight & pointlight: see spec
    //          b. directional light = no
    //          c. Use formula from slides 'shading.ppt' page 20
    //       5. spotlight cutoff: inner and outer from coefficients.x and coefficients.y
    //       6. diffuse = kd * max(normal vector dot light direction, 0.0)
    //       7. specular = ks * pow(max(normal vector dot halfway direction), 0.0), 8.0);
    //       8. notice the difference of light direction & distance between directional light & point light
    //       9. we've set ambient & color for you
    
    
    float ka = 0.1;
    float ks = 0.75;
    float kd = 0.75;
    
    
    
    color = ambient + diffuse + specular;
    
    FragColor = vec4(color, 1.0);
}

vec3 calPointLight() {
    // Ambient
    vec3 ambient = ka * color;
    // Diffuse
    vec3 lightDir = normalize(lightVector.xyz - rawPosition);
    vec3 diffuse = kd * max(dot(normal, lightDir), 0.0) * color;
    // Specular
    vec3 viewDir = normalize(viewPosition.xyz - rawPosition);
    vec3 halfwayDir = normalize(lightDir + viewDir);
    vec3 specular = ks * pow(max(dot(normal, halfwayDir), 0.0), 8.0) * color;
}
