<!-- lastmod 2022-08-03 -->
## MAX25405 Evaluation Kit

## General Description

The MAX25405 evaluation kit (EV kit) is a complete system for demonstrating the MAX25405 optical IR sensor in a typical gesture and proximity-sensing application.

The  MAX25405  enables  recognition  of  the  following gestures:

- Hand Swipe Left, Right, Up, and Down
- Finger/Hand Rotation Clockwise and Counter-Clockwise
- Air Click
- Proximity Detection and Linger-to-Click

The application circuit operates by illuminating the user's hand with a precision-controlled IR light source and measuring the reflected signal with the MAX25405's 6x10 (60 pixel)  IR  sensor  array.  The  four-LED  IR  light  source  is PWM controlled with external FETs from the MAX25405's onboard FET driver. The return signal is analyzed with an embedded microcontroller that interprets the gestures.

The EV kit consists of the following:

- MAX32620FTHR Microcontroller Platform
- Interface Shield Board
- MAX25405 Sensor Board
- Ribbon Cable (Connects Sensor Board to Shield Board)
- 3.3V Power Supply
- USB 2.0 Type A to Micro B Cable

Note: Plastic stand shown not included with EV kit. Check product website for CAD files.

Ordering Information appears at end of data sheet.

## Features

- Simple yet Flexible Gesture Solution
- Lower Solution Cost than Camera-Based Systems
- Integrated Optics with ±20deg Field of View (FOV)
- Optimum Resolution for Dynamic Hand Gestures
- Built-in LED Driver with Ultra-Low-Power Operation
- 120kLux Ambient Light Performance
- Compact 20-pin, 4mm x 4mm QFN Package, SideWettable
- AEC-Q100
- -40°C to +85°C Operation

<!-- image -->

Figure 1. MAX25405 EV Kit

<!-- image -->

Evaluates: MAX25405

## MAX25405 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25405 EV kit
- Included USB 2.0 Type A to Micro B cable
- Included 3.3V power supply
- Windows PC running the Maxim Gesture Sensor EV kit graphical user interface (GUI)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows ®  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation:

- 1) Install the PC EV kit software by running the installation executable: MaximGestureSensorEV-Kit\_SetupVx-x-x.exe. Follow the on-screen prompts for default installation, and install the driver when prompted.
- 2) Connect the external 3.3V supply to the shield board (see Figure 2).
- 3) Connect a USB cable from the MAX32620FTHR micro-USB port to the PC's USB port (see Figure 2).
- 4) Launch the PC GUI software. Start → Maxim Inte -grated → MaximGestureSensorEVKit .
- 5) The software should auto-detect the presence of the EV kit. To verify a successful connection, the lower right of the GUI should read 'Connected on COMxx at 115200.' If the software fails to make a connection, the following error message is reported: 'COM Port Offline.' See the Troubleshooting section for help if this occurs.
- 6) Click on the Run button to activate the heat map. The frames-per-second (FPS) should report a nonzero value (depending on device configuration; see Figure 3). Click Stop when finished viewing. Now that the EV kit is operating, proceed to evaluate gesture performance.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX25405

<!-- image -->

Figure 2. USB and Power Connectors

Figure 3. Heat Map Tab

<!-- image -->

Figure 4. Gesture Tab

<!-- image -->

│

## MAX25405 Evaluation Kit

- 7) Click on the Gesture tab.
- 8) Click Run . If everything is working correctly, the GUI should report a non-zero frames-per-second (FPS) reading (see Figure 4).
- 9) Gestures, object position, and other gesture-related information is displayed in the Gesture panel in the upper right of the GUI.
- 10) See Detailed Description for proper sensor setup to achieve good gesture performance.

## Detailed Description

## Notes on Proper Setup for Good Gesture Performance

The sensor should be positioned so that the face of the sensor  is  aimed  at  the  horizontal,  or  no  more  than  15 degrees from the horizontal. If desired, the sensor board can be attached to a stand using the mounting holes on either end of the sensor board.

The  sensor  should  be  set  up  so  that  it  has  an  unobstructed FOV. If the sensor is set on a table, make sure that the table top is not in the sensor's field of view (check the Heat Map view to verify that the field of view is empty when not actively performing gestures).

Figure 5. Correct Sensor Position, Directed to Side of Body

<!-- image -->

Figure 6. Horizontal Swipes

<!-- image -->

│

## MAX25405 Evaluation Kit

The sensor should be positioned to the right of the body, not aimed directly at the torso. This allows gestures to be made naturally with the hand positioned off to the side. The sensor position with respect to the body should be similar to how it would be configured in the car, with the sensor mounted just above the infotainment display in the center console, to the right of the driver (see Figure 5).

Gestures should be made in a single, smooth motion, with the hand entering the field of view at the beginning of the gesture and exiting the field of view at completion of the gesture.

## Evaluates: MAX25405

Figure 6 shows the correct way to perform left/right swipe gestures. The palm should be perpendicular to the sensor.

Figure 7 shows the correct way to perform up/down swipe gestures.  The hand must enter and then exit the field of view  and  then  not  re-enter  the  field  of  view,  to  indicate completion of the gesture. The palm or the back of the hand should be perpendicular to the sensor.

Figure 8 shows the correct way to perform rotations. The rotation  should  be  drawn  with  at  least  two  fingers.  The circle of rotation should be about 10cm in diameter, with the entire circle gesture performed within the field of view.

Figure 7. Vertical Swipes

<!-- image -->

Figure 8. Rotations

<!-- image -->

│

## MAX25405 Evaluation Kit

## Supported Gestures

| GESTURE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ICON   |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Swipes    | Swipe gestures can be made in four directions: right, left, up, and down. Swipes are indicated by a chevron pointed in the direction of the swipe.                                                                                                                                                                                                                                                                                                                 |        |
| Rotation  | Rotations can be made in the clockwise or counter-clockwise direction. Rotation is indicated by a dial graphic. A full rotation event is indicated by incrementing or dec- rementing the number shown on the dial. In addition, continuous rotation is indicated by the status bar going around the dial. By selecting the Analog Dial checkbox, the displayed rotation amount is scaled by the gear ratio value, which allows fine control over the dial setting. |        |
| Air Click | An air-click gesture is performed by bringing the palm of the hand directly toward the sensor and then directly away from the sensor in one quick smooth motion. The air click is indicated by a small filled circle.                                                                                                                                                                                                                                              |        |
| Wave      | A wave gesture is performed by swiping to the right across at least half of the FOV, then left at least 10cm, then right again to exit the FOV.                                                                                                                                                                                                                                                                                                                    |        |

## Error Events

| EVENT              | DESCRIPTION                                                                                                                                                                                                                                                                                                                             | ICON   |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Gesture Error      | An unresolved or ambiguous gesture that remains in the field of view beyond the specified maximum gesture duration is indicated by the X icon. To clear the error, simply remove the hand from the field of view.                                                                                                                       |        |
| Sunlight Rejection | This fault state occurs when intense direct sunlight is detected on the sensor. The algorithm rejects sensor frames while this fault state is active. This capability reduces the possibility of false positives due to invalid pixel readings. The fault state is auto- matically cleared after direct sunlight is no longer detected. |        |

Evaluates: MAX25405

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX25405 Evaluation Kit

## EV Kit System Functionality and Block Diagram

The EV kit uses a MAX32620FTHR (ARM Cortex-M4F) microcontroller platform to perform the following functions:

- Serial communications to the MAX25405 to config -ure the sensor and read back sensor data.
- Monitor interrupts from the MAX25405.
- Run the gesture recognition algorithm.
- Packetize the sensor data and gesture results, and stream data to the PC over the USB serial port.

Figure 9. System Diagram

<!-- image -->

## Evaluates: MAX25405

The interface  board  connects  the  MCU  and  the  sensor board and provides power to the MAX25405 and external LEDs.

│

## MAX25405 Evaluation Kit

## Updating Firmware

The  gesture  firmware  on  the  MAX32620FTHR  can  be updated with the following procedure.

- 1) Connect the MAX32620FTHR to the PC with a USB cable.
- 2) Open a File Explorer window on the PC.
- 3) Enter the bootloader mode on the MAX32620FTHR by holding the BOOT button down and simultaneously pressing and releasing the RESET button. Release the BOOT button to complete the operation.
- 4) The MAX32620FTHR appears as BOOTLOADER drive in the File Explorer directory heirarchy.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25405EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX25405

- 5) Drag and drop the firmware .bin file into the BOOT -LOADER drive. The MAX32620FTHR blinks its LEDs while it updates the firmware.
- 6) Once the blinking stops, press the RESET button or disconnect and reconnect the USB to restart the MCU.

## Troubleshooting

If  the  software  fails  to  connect  to  the  sensor,  check  the Device Manager to determine if the driver was installed properly.  When  the  EV  kit  is  connected  to  the  PC,  the device should show up under the Ports section as Maxim Serial Port .

Manual connection to the EV kit can be performed under the Device Menu .

│

## MAX25405 EV Kit Bill of Materials

|   ITEM | REF_DES                                             | DNI/DNP   |   QTY | MFG PART #                                                                                           | MANUFACTURER                                    | VALUE                | DESCRIPTION                                                                                                                                                                                           | COMMENTS   |
|--------|-----------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------------------------|-------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C3, C5, C10, C15                                | -         |     5 | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT                                                  | SAMSUNG;MURATA;CAL-CHIP                         | 10UF                 | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                                                                                                         |            |
|      2 | C2, C4                                              | -         |     2 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                | TAIYO YUDEN;TDK; SAMSUNG;MURATA                 | 1UF                  | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                                                                                                          |            |
|      3 | C6, C8, C9, C16                                     | -         |     4 | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AVX | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                                        |            |
|      4 | C7                                                  | -         |     1 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                                     | TDK;TAIYO YUDEN;TAIYO YUDEN;MURATA              | 2.2UF                | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                                                                                                        |            |
|      5 | D1, D4                                              | -         |     2 | SFH 4248                                                                                             | OSRAM                                           | SFH 4248             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=1.5V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                 |            |
|      6 | D2, D3                                              | -         |     2 | SFH 4249                                                                                             | OSRAM                                           | SFH 4249             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=5.0V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                 |            |
|      7 | J1                                                  | -         |     1 | FTSH-108-01-L-DV-K                                                                                   | SAMTEC                                          | FTSH-108-01-L-DV-K   | CONNECTOR; MALE; SMT; MICRO HEADER; STRAIGHT; 16PINS                                                                                                                                                  |            |
|      8 | M1, M2                                              | -         |     2 | SQ1912EH-T1_GE3                                                                                      | VISHAY SILICONIX                                | SQ1912EH-T1_GE3      | TRAN; NCH; SC70-6; PD-(1.5W); I-(0.8A); V-(20V)                                                                                                                                                       |            |
|      9 | MISC1                                               | -         |     1 | KTPS12-03320WA-VI-P1                                                                                 | VOLGEN                                          | KTPS12-03320WA-VI-P1 | ACCESSORY; ADAPTER; UNIVERSAL INPUT; WALL MOUNT ADAPTER                                                                                                                                               |            |
|     10 | MISC2                                               | -         |     1 | FFSD-08-D-06.00-01-N                                                                                 | SAMTEC                                          | FFSD-08-D-06.00-01-N | CONNECTOR; FEMALE; TIGER EYE FLAT IDC WIRE CABLE; WIREMOUNT; 16PINS                                                                                                                                   |            |
|     11 | R1-R3                                               | -         |     3 | CRCW06034K70FK                                                                                       | VISHAY DALE                                     | 4.7K                 | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                    |            |
|     12 | R4, R5                                              | -         |     2 | CRCW0603100RJN; ERJ-3GEYJ101                                                                         | VISHAY DALE;PANASONIC                           |                      | 100 RES; SMT (0603); 100; 5%; +/-200PPM/DEGK; 0.1000W                                                                                                                                                 |            |
|     13 | R8, R10, R17, R18, R23, R24, R38, R58, R59, R61-R64 | -         |    13 | CRCW06030000Z0                                                                                       | VISHAY DALE                                     |                      | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                         |            |
|     14 | R9, R20, R28, R48, R65-R68                          | -         |     8 | ERJ-8ENF18R2                                                                                         | PANASONIC                                       |                      | 18.2 RES; SMT (1206); 18.2; 1%; +/-100PPM/DEGK; 0.2500W                                                                                                                                               |            |
|     15 | R11-R13                                             | -         |     3 | CRCW060322R0FK                                                                                       | VISHAY                                          |                      | 22 RES; SMT (0603); 22; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                   |            |
|     16 | R14                                                 | -         |     1 | CRCW0603390RFK                                                                                       | VISHAY DALE                                     |                      | 390 RES; SMT (0603); 390; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                 |            |
|     17 | R56                                                 | -         |     1 | CRCW08050000Z0EAHP; HCJ0805ZT0R00                                                                    | VISHAY;STACKPOLE ELECTRONICS INC.               |                      | 0 RES; SMT (0805); 0; JUMPER; JUMPER; 0.5000W                                                                                                                                                         |            |
|     18 | U1                                                  | -         |     1 | MAX25405EQP/VY+                                                                                      | MAXIM                                           | MAX25405EQP/VY+      | EVKIT PART - IC; GESTURE SENSOR FOR AUTOMOTIVE APPLICATIONS; OCQFN20-EP 4MM X 4MM X 1.40MM; 0.5MM PITCH; PACKAGE OUTLINE DRAWING: 21- 100404; PACKAGE LAND PATTERN: 90-100083; PACKAGE CODE: Q2044Y+2 |            |
|     19 | PCB                                                 | -         |     1 | MAX25405_ SENSORBOARD_APPS_A                                                                         | MAXIM                                           | PCB                  | PCB:MAX25405_ SENSORBOARD_APPS_A                                                                                                                                                                      | -          |
|     20 | C11, C13                                            | DNP       |     0 | C0402C100J5GAC; GRM1555C1H100JA01                                                                    | KEMET;MURATA                                    | 10PF                 | CAP; SMT (0402); 10PF; 5%; 50V; C0G; CERAMIC                                                                                                                                                          | DNI        |
|     21 | D1B, D4B                                            | DNP       |     0 | SFH 4248                                                                                             | OSRAM                                           | SFH 4248             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=1.5V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                 | DNI        |
|     22 | D2B, D3B, D5                                        | DNP       |     0 | SFH 4249                                                                                             | OSRAM                                           | SFH 4249             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=5.0V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                 | DNI        |
|     23 | J2                                                  | DNP       |     0 | PCC03SAAN                                                                                            | SULLINS                                         | PCC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                              | DNI        |
|     24 | R6, R7, R15, R16, R19, R21, R22, R40-R43, R60       | DNP       |     0 | CRCW06030000Z0                                                                                       | VISHAY DALE                                     |                      | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                         | DNI        |
|     25 | R55                                                 | DNP       |     0 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                                      | VISHAY; PANASONIC;BOURNS                        | 1K                   | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      | DNI        |

Evaluates: MAX25405

## MAX25405 EV Kit Schematic

<!-- image -->

## MAX25405 EV Kit PCB Layout Diagrams

<!-- image -->

MAX25405 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX25405 EV Kit PCB Layout-Top

MAX25405 EV Kit PCB Layout-Layer1

<!-- image -->

MAX25405 EV Kit PCB Layout-Layer2

<!-- image -->

│

## MAX25405 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX25405 EV Kit PCB Layout-Bottom

MAX25405 EV Kit PCB Layout-Silk Bottom

<!-- image -->

MAX25405 EV Kit-Assembly Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25405