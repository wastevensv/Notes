# [ARDnD](https://github.com/wastevensv/ARDnD)
An augmented reality tabletop using OpenGL and OpenCV.

## Credits
* OpenCV code for detecting squares is based on [an OpenCV tutorial](https://github.com/Itseez/opencv/blob/master/samples/cpp/squares.cpp).
  * I added the ability to filter colors and detect the orientation and scale of the square.
* OpenGL code is a combination of [multiple](https://open.gl/) [different](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-8-basic-shading/) [tutorials](http://learnopengl.com/).
  * I added the ability to render multiple different objects in the same frame (surprisingly not many tutorials cover this.)

## Running
A build for rendering frames from a folder of sample images is currently available under the [GitHub releases section](https://github.com/wastevensv/ARDnD/releases).

## Screenshots
![Screenshot](img/opengl-opencv/screenshot.png)
![Screenshot](img/opengl-opencv/orig-screenshot.png)

## Dependencies
* OpenCV
* OpenGL (3.3 or above)
* glfw3
* glew32
* SOIL
