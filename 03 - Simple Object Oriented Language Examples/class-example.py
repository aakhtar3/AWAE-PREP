#!/usr/bin/env python

'''

Very simple example of object oriented programming in Python

'''

class Picture():

  def __init__(self, id, title, img):
    self.id = id
    self.title = title
    self.img = img

  def display_values(self):
    print("id:%s, title:%s, img:%s" % (self.id, self.title, self.img))

# initialize and call
example = Picture("1", "title", "file.png")
example.display_values()
