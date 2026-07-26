<!-- lastmod 2022-08-05 -->
## MAX31912/MAX31913 Evaluation Kits

## General Description

The  MAX31912  and  MAX31913  evaluation  kit  (EV  kit) provides  the  hardware  and  software  graphical  user interface  (GUI)  necessary  to  evaluate  the  MAX31912 or  MAX31913  industrial  octal  digital  input  translators/ serializers.  The  EV  kit  includes  a  MAX31912AUI+  or MAX31913AUI+ installed as well as a digital isolator and USB-to-SPI interface.

The USB-to-SPI dongle is a separate PCB that can be used to interact with the EV kit software. This dongle is optional and is not necessary for the proper operation of the devices if the user supplies the SPI interface.

Note: These  EV  kits  are  intended  for  functional  and parametric evaluation of the ICs only and are not intended for EMC testing.

## MAX31912/MAX31913 EV Kit Files

| FILE                                | DESCRIPTION         |
|-------------------------------------|---------------------|
| MAX31912_13EVKitSoftwareInstall.EXE | Application program |

Note: The .EXE file is downloaded as a .ZIP file.

## MAX31912/MAX31913 EV Kit Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## Features

- Easy Evaluation of the MAX31912 or MAX31913
- USB HID Interface
- Digital Isolator
- Windows XP ® - and Windows ®  7-Compatible Software
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Assembled Circuit Board including MAX31912AUI+ or MAX31913AUI+
- USB-to-SPI Dongle
- Mini-USB Cable

Ordering Information appears at end of data sheet.

## Evaluate:

## MAX31912/MAX31913

## MAX31912/MAX31913 Evaluation Kits

## Quick Start

## Required Equipment

- MAX31912/MAX31913 EV kit
- PC with Windows XP or Windows 7 OS
- USB port
- Mini-USB cable (included)
- EV kit hardware (included)
- USB to SPI Dongle (included)
- Screw driver
- Wire
- Power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the install or EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the USB-to-SPI dongle (J52) to the EV kit connector J3.
- 2) Install jumpers on RIREF (J2) and SIN-GND (J6).
- 3) Set the EV kit hardware on a nonconductive surface that ensures that nothing on the PCB gets shorted to the workspace.
- 4) Use the wires to connect J1 (VCC and GND) to a power supply and tighten the screws on the wire.
- 5) Prior  to  starting  the  GUI,  connect  the  EV  kit  hardware to a PC using the supplied mini-USB cable, or equivalent. The POWER LED (D50) should be green and the COM LED (D51) should be red and slowly flash orange.
- 6) Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore does not require a unique/custom device driver.  Once  the  driver  installation  is  complete,  a Windows message appears near the System Icon menu indicating that the hardware is ready to use. Do not attempt to run the GUI prior to this message. If  you  do,  then  you  must  close  the  application  and restart it once the driver installation is complete. On some versions of Windows, Administrator privileges may be required to install the USB device.

## Evaluate: MAX31912/MAX31913

- 7) Once  the  device  driver  installation  is  complete, visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX31912\_13EVKitSoftwareInstall.ZIP.  Save  the EV kit software to a temporary folder.
- 8) Open the .ZIP file and double-click the .EXE file to run  the  installer. A  message  box  stating The publisher  could  not  be  verified.  Are  you  sure  you want to run this software? may appear. If so, click Yes .
- 9) The  installer  GUI  appears.  Click Next and  then Install . Once complete, click Close .
- 10) Go to Start | All  Programs . Look for the MAX31912\_13EVKitSoftware folder  and  click  on MAX31912\_13EVKitSoftware.EXE inside the folder.
- 11) When the  GUI  appears,  the  text  above  the  status box  should  display EV  kit  Hardware  Connected . The  COM  LED  (D51)  on  the  EV  kit  board  should turn green.
- 12) Connect  field  inputs  to  J5,  or  install  jumpers  on FIN1-FIN8, and click Single Read .

## Detailed Description of Software

Figure 1. MAX31912/MAX31913 EV Kit GUI

<!-- image -->

│

## MAX31912/MAX31913 Evaluation Kits

## Hardware Configuration

In this section the user must provide hardware configuration information about the EV kit. Select the 8 Bits radio button in the Number of Bits section if MODESEL does not have a jumper on J6. Select the 16 Bits radio button if MODESEL is connected to GND on J6. If there are more devices daisy-chained to the EV kit, select the number of devices from the Number of MAX31912/13 combo box.

## Reads

To read the input channels of the devices, select Single Read . This calculates the number of bits to read based on the Hardware Configuration settings and then displays the read data in the table. Continuous Reads reads the input channels every 300ms and displays the data in the

## Evaluate: MAX31912/MAX31913

table. Once the Continuous Reads start, the button text changes to Stop for the user to stop the reads.

## Data

The Data table displays the 8 or 16 bits read from each device connected to the EV Kit. The first row of data is the first 8 or 16 bits read from the device connected to the microcontroller. The second row is the data read from the device connected to the SIN of the first device (see Figure 2). The MAX31912/13 column displays the device name. The device name can be changed by clicking on the name twice. The HEX column displays the data in hexadecimal format for each device. The Input Channels , CRC , UV Alarm , OT Alarm ,  and UV2 Alarm columns display the data in binary format.

Figure 2. MAX31912/MAX31913 EV Data Table

<!-- image -->

│

## MAX31912/MAX31913 Evaluation Kits

## Table 1. Hardware Configurations

| HARDWAREACTION                      | COMPONENTS   | DESCRIPTION                                                                                                                                                                             |
|-------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connect field inputs                | J5           | Remove pullup jumpers FIN1-FIN8 and connect field inputs to J5.                                                                                                                         |
| Adjust current limit                | J2           | Remove jumper on J2 and connect external resistor to the RIREF pin on J2. Connect other end of the resistor to GND.                                                                     |
| Daisy-chain MAX31912/ MAX31913      | SIN (J6)     | Remove SIN jumper on J6 and connect external MAX31912/MAX31913 SOUT to SIN on J6.                                                                                                       |
| Remove isolation                    | R58 - R61    | On the USB-to-SPI dongle, populate 0Ω resistors on R58-R61.                                                                                                                             |
| Connect user-supplied SPI interface | J3           | Remove USB-to-SPI dongle from J3 and connect user SPI interface to J3 pins. Note: This also removes the digital isolator. See the User-Supplied SPI Interface section for more details. |

## Detailed Description of Hardware

## User-Supplied SPI Interface

The USB-to-SPI dongle is an optional PCB that is only needed to  interact  with  the  MAX31912/MAX31913  software. The user has the option to supply an external SPI interface to communicate with the devices. To connect a user-supplied SPI interface, remove the dongle from J3 and connect an external SPI interface to the pins on J3. Removing  the  dongle  also  removes  the  isolator  so  the user may also want to provide an external digital isolator.

## Table 3. Description of LEDs

| LED         | COLOR   | DESCRIPTION                                                                                                                |
|-------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| D1-D8       | Red     | Field Input LED Driver: Field input is logic-high.                                                                         |
| D10         | Red     | Fault: MAX31912/MAX31913 has detected a fault. The field supply is too low or the IC temperature is too high.              |
| D50 (POWER) | Red     | USB Power Fault: A fault occurred due to overvoltage limit, current limit, or thermal limit                                |
| D50 (POWER) | Green   | USB Power: USB power supply is on.                                                                                         |
| D51 (COM)   | Red     | Communication: After the software has initialized the hardware the LED flashes red when a command from the PC is received. |
| D51 (COM)   | Green   | Initialized: Hardware has been initialized by software.                                                                    |

## Troubleshooting

All effort have been made to ensure that each kit works on the first try, right out-of-the-box. In the rare occasion that a problem is suspected, see Table 4 to help troubleshoot the issue.

## Table 2. Description of Jumpers

| JUMPER    | DESCRIPTION                                    |
|-----------|------------------------------------------------|
| J2        | RIREF: Connects R1 to RIREF pin                |
| J6*       | DB0: Pulls DB0 down to GND                     |
| J6*       | DB1: Pulls DB1 down to GND                     |
| J6*       | MODESEL: Pulls MODESEL down to GND.            |
| J6*       | SIN: Pulls SIN down to GND                     |
| FIN1-FIN8 | Field Inputs: Connects field input FINX to VIN |

## Evaluate: MAX31912/MAX31913

│

## MAX31912/MAX31913 Evaluation Kits

## Table 4. Troubleshooting

| SYMPTOM                      | CHECK                                                        | SOLUTION                                                                                                                                                                                                                                                               |
|------------------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found. | Is the LED labeled D50 red?                                  | If yes, then the electronic fuse (U50) is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface.                                                                                                |
| GUI says hardware not found. | Does the LED labeled D51 turn green when the GUI is running? | If not, then exit the GUI and try running it again. If D51 still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message that states the hardware is ready to use. Run the GUI again. |
| GUI says hardware not found. | Are any of the LEDs illuminated?                             | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port                                                                                                                                                          |
| CRC returns all 0s or all 1s | J6 (MODESEL)                                                 | Place a jumper on J6 (MODESEL) for the devices to be in 16-bit mode.                                                                                                                                                                                                   |

## Component Lists

## MAX31912/MAX31913 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C12       |     2 | 0.1μF, X7R ceramic capacitors (0805) TDK CGJ4J2X7R1H104K           |
| C2            |     1 | 4.7μF, X7R ceramic capacitor (0805) TDK CGA4J1X7R1E475K            |
| C3-C10        |     0 | Do not populate, 1nF, 60V ceramic capacitors (0805)                |
| C11           |     1 | 10μF, 100V X7S ceramic capacitor (2220) TDK C5750X7S2A106M         |
| D1-D8         |     8 | LEDs (0805)                                                        |
| D9            |     1 | 36V, 600W zener diode ON Semiconductor 1SMB36AT3G                  |
| D10           |     1 | Red LED (0805) Kingbright APT2012EC                                |
| J1            |     1 | 2-position screw terminal, 3.5mm pitch Phoenix Contact 1984617     |
| J2, J15-J22   |     9 | 2-pin single-row header, 2.54mm pitch Molex 22-28-4020             |
| J3            |     1 | 7-pin single-row right-angle header, 2.54mm pitch Molex 22-28-8070 |

## Evaluate: MAX31912/MAX31913

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| J5            |     1 | 10-position screw terminal, 2.5mm pitch TE Connectivity 1-282834-0                |
| J6            |     1 | 8-pin (2 x 4) header, 2.54mm pitch TE Connectivity 5-146256-4                     |
| J7-J14        |     0 | Do not populate, solder bridge                                                    |
| R1            |     1 | 15kΩ ±1%, 1/8W resistor (0805) Bourns CR0805-FX-1502ELF                           |
| R2            |     1 | 150Ω ±5%, 1/3W resistor MELF (0207) Vishay MMB02070C1500FB200                     |
| R3-R10        |     8 | 2.2kΩ ±1%, 1/4W resistor MELF (0204) Vishay MMA02040C2201FB300                    |
| R11           |     1 | 3.3kΩ ±5% resistor (0805) Bourns CR0805-FX-3301ELF                                |
| TP1           |     1 | Black test point                                                                  |
| U1            |     1 | Industrial interface serializer (28 TSSOP-EP*) Maxim MAX31913AUI+ or MAX31912AUI+ |
| -             |     1 | PCB: MAX31912/13 EV Kit                                                           |

## MAX31912/MAX31913 Evaluation Kits

## Component List (continued)

## USB-to-SPI Dongle

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C50, C51      |     2 | 10μF X7R ceramic capacitors (0805) KEMET C0805C106K8RACTU        |
| C53           |     1 | 22pF X7R ceramic capacitor (0805) KEMET C0805C220KBRACTU         |
| C54           |     1 | 220nF X7R ceramic capacitor (0805) TDK CGJ4J2X7R1H224K           |
| C55           |     1 | 1μF X7R ceramic capacitor (0805) TDK C2012X7R1H105K              |
| C56-C58       |     3 | 0.1μF X7R ceramic capacitors (0805) TDK CGJ4J2X7R1H104K          |
| D50, D51      |     2 | Dual LEDs, red/green KingbrightAPHB M2012SURKC- GKC              |
| D52           |     1 | Schottky diode ROHM Semi RB060M-30TR                             |
| J50           |     1 | 5-pin female Mini-USB Molex 54819-0519                           |
| J51           |     0 | Do not populate                                                  |
| J52           |     1 | 7-pin single-row right-angle socket, 2.54mm pitch PPPC071LGBN-RC |
| R50, R62      |     2 | 560Ω ±1% resistors (0805) Bourns CR0805-FX-5600ELF               |

## Evaluate: MAX31912/MAX31913

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| R51, R52, R57 |     3 | 0Ω ±5% resistors (0805) Bourns CR0805-J/-000ELF                             |
| R53           |     1 | 4.7kΩ ±1% resistor (0805) Bourns CR0805-FX-4701ELF                          |
| R54, R55      |     2 | 330Ω ±1% resistors (0805) Bourns CR0805-FX-3300ELF                          |
| R56           |     1 | 2.2kΩ ±1% resistor (0805) Bourns CR0805-FX-2201ELF                          |
| R58-R61       |     0 | Do not populate, resistors (0805)                                           |
| R63           |     1 | 100kΩ ±1% resistor (0805) Bourns CR0805-FX-1003ELF                          |
| U50           |     1 | 50mA to 600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+             |
| U51           |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO                          |
| U52           |     0 | Do not populate, 4-channel digital isolator (16 SO, 300 mils) TI ISO7242M/C |
| U53           |     1 | 6-channel digital isolator (16 SO, 150 mils) Maxim MAX14850ASE+             |
| X50           |     1 | 48MHz, 5V oscillator (SMD) TXC 7W-48.000MAB-T                               |

│

## MAX31912/MAX31913 Evaluation Kits

## Evaluate: MAX31912/MAX31913

Figure 3a. MAX31912/MAX31913 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

│

## MAX31912/MAX31913 Evaluation Kits

## Evaluate: MAX31912/MAX31913

Figure 3b. MAX31912/MAX31913 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

│

## MAX31912/MAX31913 Evaluation Kits

## Evaluate: MAX31912/MAX31913

Figure 4. MAX31912/MAX31913 EV Kit PCB Layout -Top

<!-- image -->

Figure 5. MAX31912/MAX31913 EV Kit PCB Layout -Internal Layer 1

<!-- image -->

│

Figure 6. MAX31912/MAX31913 EV Kit PCB Layout -Internal Layer 2

<!-- image -->

Figure 7. MAX31912/MAX31913 EV Kit PCB Layout -Bottom

<!-- image -->

│

## MAX31912/MAX31913 Evaluation Kits

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX31912EVKIT#* | EV Kit |
| MAX31913EVKIT#  | EV Kit |

#Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

*Future product-contact factory for availability.

## MAX31912/MAX31913 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and ma[ limits) shown in the Electrical Characteristics taEle are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## Evaluate: MAX31912/MAX31913