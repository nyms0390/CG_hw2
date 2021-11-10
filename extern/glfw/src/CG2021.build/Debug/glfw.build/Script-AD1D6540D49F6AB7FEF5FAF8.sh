#!/bin/sh
set -e
if test "$CONFIGURATION" = "Debug"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW2/extern/glfw/src
  /usr/local/Cellar/cmake/3.21.3_1/bin/cmake -E cmake_symlink_library /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.4.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.dylib
fi
if test "$CONFIGURATION" = "Release"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW2/extern/glfw/src
  /usr/local/Cellar/cmake/3.21.3_1/bin/cmake -E cmake_symlink_library /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.4.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.dylib
fi
if test "$CONFIGURATION" = "MinSizeRel"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW2/extern/glfw/src
  /usr/local/Cellar/cmake/3.21.3_1/bin/cmake -E cmake_symlink_library /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.4.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.dylib
fi
if test "$CONFIGURATION" = "RelWithDebInfo"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW2/extern/glfw/src
  /usr/local/Cellar/cmake/3.21.3_1/bin/cmake -E cmake_symlink_library /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.4.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.3.dylib /Users/zhangyang/Documents/Assignments/CG/HW2/bin/libglfw.dylib
fi

