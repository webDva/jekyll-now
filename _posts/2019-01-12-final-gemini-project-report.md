---
layout: post
title: Final Gemini Project Report
---

The Gemini Project has served its purpose and is now completed. Due to the combination of the project's very generous and flexible performance constraint and its driving time constraint, I have determined that I have enough science, experience, and technology needed to develop a 3D multiplayer game.

This final report will include a possible solution for dealing with the 3D level creation issue and a note on the relevance of 3D transformations.

# Creating 3D levels with metadata using Blender

3D levels or maps can be created in the Blender 3D modeling utility. Objects such as doors that can open and close would need to have properties associated with them so that this object-property mapping can be used by a game engine to facilitate intended game logic. Before the mappings can be used by a game engine, there must first be a way to extract the object properties from a Blender created 3D level. The following is a proposal for such a method of creating 3D levels with metadata using Blender.

## Creating properties for the objects/entities in a 3D level

I do not know, but I think that the properties for an entity in a 3D level can be created and handled using the Python-Blender programmable interface console, if I cannot do it using the default Blender user interface for each entity-property mapping that is to be created. This would be tedious and made doubly so because of Blender's apparent (not really what I think) cumbersome interface, but it would be viable and sufficient.

## Python utility for exporting entity-property mappings

Since Blender allows 3D entities to have a programmable interface with the use of the Python programming language, a Python script can be created to obtain the metadata of a 3D level. In particular, we can create a Python script that exports the 3D level's metadata to a file with a format such as JSON.

Here is Python source code technology that someone kindly [shared freely](https://www.reddit.com/r/gamedev/comments/ac4uhe/whats_your_workflow_when_using_blender_as_a_level/ed5le0h/) that can help facilitate that utility:

```python
import bpy
import json

def create_json():
    json_dictionary = {}
    json_dictionary["entities"] = []
    
    # obtain each 3D object in the level and retrieve its properties
    for obj in bpy.data.objects:
        entity = {"name": obj.name}

        # essential object position, rotation, and scale properties
        entity["position"] = {"x": obj.location.x, "y": obj.location.y, "z": obj.location.z}
        entity["rotation"] = {"x": obj.rotation_euler.x, "y": obj.rotation_euler.y, "z": obj.rotation_euler.z}
        entity["scale"] = {"x": obj.scale.x, "y": obj.scale.y, "z": obj.scale.z}

        # metadata for custom aspects of the object
        if len(obj.keys()) > 1:
            for k in obj.keys():
                if k not in "_RNA_UI":
                    custom_property = obj[k]
                    if isinstance(custom_property, int) or isinstance(custom_property, float) or isinstance(custom_property, str):
                        entity[k] = obj[k] # if the property is actually a valid property, then create a mapping
        json_dictionary["entities"].append(entity)
        
    return json.dumps(json_dictionary, indent = 4, sort_keys = True)
```

Blender allows its graphical user interface to be modified with its Python programmable interface thereby allowing the entity-property mappings to be extracted during editing. But I do not currently have the capability to implement such a Python-Blender graphical interface modification. So this proposed method will require the user to always first save the file to disk and then instruct the Python script to extract the level metadata from the Blender file on disk.

# 3D Transformations

I've begun developing technology for a 3D multiplayer game. Committed to the Gemini Project's goal of making discoveries, I created subsystem prototypes to investigate and determine their feasibility in certain conditions and to create predictive (mental) models that can be used to achieve program and system success. One such subsystem involves the transmission of coordinates between a server and client in a 3D context.

Behind the scenes of the .gif below, the subsystem consists of the player client sending to the server the map coordinates that the player 3D mesh intends to travel to which is determined by the location of the mouse cursor.

![Click-to-move subsystem demonstration](/assets/images/possible_transform_problem.gif "Incorrect direction of travel in the click-to-move subsystem prototype")

The .gif shows that the direction of travel of the 3D mesh as well as its final position after each movement is completed is not aligned with the mouse's location on the grid plane, thereby causing the 3D mesh to not move in the player's intended direction nor to the intended location. I believe that the cause of this may be that the client is sending to the server coordinates from a local space instead of the global space of the scene.

From this, I infer that an understanding of transforming vectors from one vector space to another is essential for operating in a 3D environment. Also note that not much effort is needed (for me) to understand 3D transformations as I have discovered that a 3D transformation is only a process that consists of having four-by-four matrices being multiplied by appropriately sized matrix multiplicands.

# The conclusion of *Project Gemini*

With this current data, technology, science, and experience that I now have pertaining to 3D game development thanks to the Gemini Project, I can begin to develop a 3D multiplayer game. Not only is this an engineering endeavor, but it is also a commercial one with the primary goal of establishing revenue and a means of income as a technology entrepreneur before this decade is out. Not only is this a long and daring journey with a high technical complexity, but it is also one with a complex market space that must be successfully operated and navigated in. This is not to mention the hyperparadigm that these two paradigms or systems are a part of, which calls for systems engineering and systems thinking skills that only champions possess.

I have about one year of experience as a full-time indie maker, and the valuable lessons learned and startup experienced gained from that are being used as utility factors for achieving program success. But the core essential utility factors are courage, commitment, strength, and integrity.

If I fail, it would be because I did not have what it takes to be an entrepreneur, that I did not have the right stuff.

But I have said that I have what it takes. I have said that I have the right stuff. My word is my honor and I have the courage to uphold that honor, despite anything, as that is my integrity and constitution.