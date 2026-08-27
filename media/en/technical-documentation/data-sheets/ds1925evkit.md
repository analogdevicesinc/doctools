<!-- lastmod 2022-08-03 -->
## DS1925 Evaluation Kit

## General Description

The DS1925EVKIT is a Thermochron iButton ®  starter kit that provides the basic hardware for a quick evaluation of Maxim's Thermochron iButton family that communicates using the 1-Wire protocol. The kit uses a USB port of a PC running Windows ®  operation system. The kit includes DS1925L  Thermochron  iButton  and  all  the  hardware required to communicate with it. The DS1925L is a highcapacity Thermochron capable of 122K 8-bit readings or 61K 16-bit readings taken at equal distances. The easy setup  process  includes  the  free  downloadable  1-Wire ® drivers  and  the  OneWireViewer  demonstration  software to  communicate  easily  with  iButtons  through  the  PC's USB port. Visit the download site for the free 1-Wire drivers and bundled OneWireViewer.

For developers who wish to create custom iButton ecosystems, Maxim provides iButton design resources with links  for  software  resources  and  iButton  accessories found here .

Evaluates: DS1925

## Benefits and Features

- Starter Kit Evaluates the DS1925L Thermochron iButton Temperature Recording Device with a Microsoft Windows-Based PC
- Easy Setup with USB Adapter
- Free Download of 1-Wire Drivers and OneWireViewer Demonstration Software
- Compatible with Other Thermochron iButtons: DS1921, DS1922L, DS1922T, DS1922E, and DS1923 (Not Included)

Ordering Information appears at end of data sheet.

Figure 1. DS1925 EV Kit

<!-- image -->

iButton and 1-Wire are registered trademarks of Maxim Integrated Products, Inc.

Windows is a registered trademark of Microsoft Corporation.

<!-- image -->

## DS1925 Evaluation Kit

## Quick Start

To  download  the  1-Wire  drivers  software  package,  visit the 1-Wire Drivers page and click the button that takes you  to  the Download  Page .  Select  the  applicable  version of the Windows operating system and select the file that corresponds to your PC's configuration (e.g., 32-bit 1-Wire drivers or 64-bit 1-Wire drivers) and then click the Download button.  The  web  page  provides  assistance on how to detect whether your PC runs a 32-bit or 64-bit operating system.

- 1) Double click on the file you just downloaded ( install\_1\_wire\_drivers\_x64\_v405.msi or newer).
- 2) Select Run when prompted with the question 'Do you want to run or save this file?'
- 3) The welcome setup wizard box opens for the OneWireDrivers Setup. Click the Next button.
- 4) Read and check the box if you accept the license agreement. Click Next .
- 5) Leave the destination folder to default and click Next .
- 6) Make sure DS9490R is unplugged and click Install . If asked the question 'Would you like to install this device software?' click Install .
- 7) Click the Finish button to exit the Setup Wizard .
- 8) After running the 1-Wire installation wizard, make sure internet is available and plug the DS9490R USB adapter in to a free USB port in your PC.
- 9) Plug the RJ-11 Modular connector of the DS1402DDR8 Blue Dot Receptor into the DS9490R USB adapter.
- 10)  Optionally snap the iButton into the key fob. This makes easier removal of the iButton from the Blue Dot Receptor. Note: For easier installation, place the key fob in warm water prior to inserting the iButton. The warm moisture helps the key fob slide on easier to the iButton.
- 11)  Go to the Start menu under All Programs and select the folder 1-Wire Drivers x64.  Select the Default 1-Wire Net.exe program. When the program window appears click on Auto Detect . The program finds which USB port the DS9490R occupies. If prompted by another window, click Yes to set as the new default port.  Exit the program.
- 12)  Go to the Start menu and click on OneWireViewer. exe icon. This application can also be found under the Start menu folder ''1-Wire Drivers x64'' that was used previously.
- 13)  Snap the iButton (optionally with key fob) into the Blue Dot Receptor to display its address. Click on the address to access screens that show all the functions of each iButton. Then follow the instructions for missioning and reading the contents of a Thermochron.

## Evaluates: DS1925

For  more  details  on  using  the  OneWireViewer,  see Application Note 4373: OneWireViewer and iButton Quick Start  Guide  and Application Note 3358: OneWireViewer User's Guide

## Detailed Description of Software

For developing applications for the DS1925 Thermochron, Maxim offers three software development kits (SDKs):

1-Wire API for Java (OWAPI support) . This is the foundation for developing robust 1-Wire and iButton software on platforms that have a Java Virtual Machine. It includes the above-mentioned OneWireViewer utility and its Java source code. In other words, this provides support for the 1-Wire link primitives, 1-Wire network, transport memory byte read/write, transport memory packet read/write and the 1-Wire files structure, which is the full list of support for DS1925. Download here:

## [https://www.maximintegrated.com/en/products/ibut -ton/software/1wire/1wire\_api.cfm](https://www.maximintegrated.com/en/products/ibutton/software/1wire/1wire_api.cfm)

1-Wire  SDK  for  Windows  (TMEX  support) .  This  SDK is  aimed  primarily  at  PC  host  environments  running Microsoft  Windows.  This  provides  support  for  only  the 1-Wire link primitives and the 1-Wire network of DS1925. Download here:

## [https://www.maximintegrated.com/en/products/ibut -ton/software/windowsdk/index.cfm](https://www.maximintegrated.com/en/products/ibutton/software/windowsdk/index.cfm)

1-Wire  Public  Domain  Kit .  This  SDK  is  aimed  as  a cross-platform  API.  This  provides  support  for  only  the 1-Wire link primitives and the 1-Wire network of DS1925. Download here:

[http://www.maximintegrated.com/en/products/ibut -ton/software/1wire/wirekit.cfm](http://www.maximintegrated.com/en/products/ibutton/software/1wire/wirekit.cfm)

│

## EV Kit Contents

| PART         |   QTY | DESCRIPTION                                                         |
|--------------|-------|---------------------------------------------------------------------|
| DS1925L-F5#  |     1 | iButton High-Capacity Temperature Logger with 122KB Data-Log Memory |
| DS9093AB+    |     1 | iButton Key Ring Mounts (blue)                                      |
| DS1402D-DR8+ |     1 | Blue Dot Receptor Cable                                             |
| DS9490R#     |     1 | USB to 1-Wire Adapter                                               |

## Ordering Information

| PART         | TYPE      |
|--------------|-----------|
| DS1925EVKIT# | EV System |

Evaluates: DS1925

│

## DS1925 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS1925