<!-- lastmod 2022-08-03 -->
## MAX25205 Evaluation Kit

## General Description

The MAX25205 evaluation kit (EV kit) is a complete system for demonstrating the MAX25205 optical IR sensor in a typical gesture and proximity-sensing application.

The MAX25205 enables recognition of the following gestures:

- Hand Swipe Left, Right, Up, and Down
- Finger/Hand Rotation Clockwise and Counterclockwise
- Air Click
- Proximity Detection and Linger-to-Click

The application circuit operates by illuminating the user's hand with a precision-controlled IR light source and measuring the reflected signal with the MAX25205's 6x10 (60 pixel)  IR  sensor  array.  The  four-LED  IR  light  source  is PWM controlled with external FETs from the MAX25205's onboard FET driver. The return signal is analyzed with an embedded microcontroller that interprets the gestures.

The EV Kit consists of the following:

- MAX32620FTHR Microcontroller Platform
- Interface Shield Board
- MAX25205 Sensor Board
- Ribbon Cable (Connects Sensor Board to Shield Board)
- 3.3V Power Supply
- USB 2.0 Type A to Micro B Cable

Ordering Information appears at end of data sheet.

Evaluates: MAX25205

## Features and Benefits

- Simple yet Flexible Gesture Solution
- Lower Solution Cost than Camera-Based Systems
- Integrated Optics with ±20deg FOV
- Optimum Resolution for Dynamic Hand Gestures
- Built-in LED Driver with Ultra-Low-Power Operation
- 120kLux Ambient Light Performance
- Compact 20-pin, 4mm x 4mm QFN Package, SideWettable
- AEC-Q100
- -40°C to +85°C Operation

Figure 1. MAX25205 EV Kit

<!-- image -->

Note: Pictured plastic stands not included with EV kit. See product website for CAD files.

<!-- image -->

## MAX25205 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25205 EV Kit
- Included USB 2.0 Type A to Micro B Cable
- Included 3.3V Power Supply
- Windows PC Running the Maxim Gesture Sensor EV Kit GUI

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows ®  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install the PC EV kit software by running the installation executable: MaximGestureSensorEV-Kit\_SetupVx-x-x.exe. Follow the on-screen prompts for default installation, and install the driver when prompted.
- 2) Connect the external 3.3V supply to the shield board (see Figure 2).
- 3) Connect a USB cable from the MAX32620FTHR micro-USB port to the PC's USB port (see Figure 2).
- 4) Launch the PC GUI software. Start → Maxim Inte -grated → MaximGestureSensorEVKit .
- 5) The software should auto-detect the presence of the EV kit. To verify a successful connection, the lower right of the GUI should read 'Connected on COMxx at 115200.' If the software fails to make a connection, the following error message is reported: 'COM Port Offline.' See the troubleshooting section for help if this occurs.
- 6) Click on the Run button to activate the heat map. The frames-per-second (FPS) should report a nonzero value (depending on device configuration; see Figure 3). Click Stop when finished viewing. Now that the EV kit is operating, proceed to evaluate gesture performance.

Microsoft Corporation registered trademark and registered service mark

Evaluates: MAX25205

<!-- image -->

Figure 2. USB and Power Connectors

Figure 3. Heat Map Tab

<!-- image -->

Figure 4. Gesture Tab

<!-- image -->

│

## MAX25205 Evaluation Kit

- 7) Click on the Gesture tab.
- 8) Click Run . If everything is working correctly, the GUI should report a non-zero frames-per-second (FPS) reading (see Figure 4).
- 9) Gestures, object position, and other gesture-related information will be displayed in the Gesture panel in the upper right of the GUI.
- 10) See Detailed Description for proper sensor setup to achieve good gesture performance.

## Evaluates: MAX25205

## Detailed Description

## Notes on Proper Setup for Good Gesture Performance

The sensor should be positioned so that the face of the sensor  is  aimed  at  the  horizontal,  or  no  more  than  15 degrees from the horizontal. If desired, the sensor board can be attached to a stand using the mounting holes on either end of the sensor board.

The sensor should be set up so that it has an unobstructed field of view. If the sensor is set on a table, make sure that the table top is not in the sensor's field of view (check

Figure 5: Correct Sensor Position, Directed to Side of Body

<!-- image -->

Figure 6: Horizontal Swipes

<!-- image -->

│

## MAX25205 Evaluation Kit

the Heat Map view to verify that the field of view is empty when not actively performing gestures).

The sensor should be positioned to the right of the body, not aimed directly at the torso. This allows gestures to be made naturally with the hand positioned off to the side. The sensor position with respect to the body should be similar to how it would be configured in the car, with the sensor mounted just above the infotainment display in the center console, to the right of the driver.

Gestures should be made in a single, smooth motion, with the hand entering the field of view at the beginning of the

## Evaluates: MAX25205

gesture and exiting the field-of-view at completion of the gesture.

Figure 6 shows the correct way to perform left/right swipe gestures. The palm should be perpendicular to the sensor.

Figure 7 shows the correct way to perform up/down swipe gestures.  The hand must enter and then exit the field of view  and  then  not  re-enter  the  field  of  view,  to  indicate completion of the gesture. The palm or the back of the hand should be perpendicular to the sensor.

Figure 8 shows the correct way to perform rotations. The rotation  should  be  drawn  with  at  least  two  fingers.  The

Figure 7: Vertical Swipes

<!-- image -->

Figure 8: Rotations

<!-- image -->

│

## MAX25205 Evaluation Kit

## Supported Gestures

| GESTURE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ICON   |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Swipes    | Swipe gestures can be made in four directions: right, left, up, and down. Swipes are indicated by a chevron pointed in the direction of the swipe.                                                                                                                                                                                                                                                                                                              |        |
| Rotation  | Rotations can be made in the clockwise or counterclockwise direction. Rotation is indicated by a dial graphic. A full rotation event is indicated by incrementing or decrementing the number shown on the dial. In addition, continuous rotation is indicated by the status bar going around the dial. By selecting the Analog Dial checkbox, the displayed rotation amount is scaled by the gear ratio value, which allows fine control over the dial setting. |        |
| Air Click | An air-click gesture is performed by bringing the palm of the hand directly toward the sensor and then directly away from the sensor in one quick smooth motion. The air click is indicated by a small filled circle.                                                                                                                                                                                                                                           |        |
| Wave      | A wave gesture is performed by swiping to the right across at least half of the FOV, then left at least 10 cm, then right again to exit the FOV.                                                                                                                                                                                                                                                                                                                |        |

## Error Events

| EVENT              | DESCRIPTION                                                                                                                                                                                                                                                                                                                           | ICON   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Gesture Error      | An unresolved or ambiguous gesture that remains in the field of view beyond the specified maximum gesture duration is indicated by the X icon. To clear the error, simply remove the hand from the field of view.                                                                                                                     |        |
| Sunlight Rejection | This fault state occurs when intense direct sunlight is detected on the sensor. The algorithm rejects sensor frames while this fault state is active. This capability reduces the possibility of false positives due to invalid pixel readings. The fault state is automatically cleared after direct sunlight is no longer detected. |        |

Evaluates: MAX25205

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX25205 Evaluation Kit

circle of rotation should be about 10cm in diameter, with the entire circle gesture performed within the field of view.

## EV Kit System Functionality and Block Diagram

The EV kit uses a MAX32620FTHR (ARM Cortex-M4F) microcontroller platform to perform the following functions:

Evaluates: MAX25205

- Serial communications to the MAX25205 to config -ure the sensor and read back sensor data.
- Monitor interrupts from the MAX25205.
- Run the gesture recognition algorithm.
- Packetize the sensor data and gesture results, and stream data to the PC over the USB serial port.

Figure 9. System Diagram

<!-- image -->

│

## MAX25205 Evaluation Kit

The interface  board  connects  the  MCU  and  the  sensor board and provides power to the MAX25205 and external LEDs.

## Updating Firmware

The  gesture  firmware  on  the  MAX32620FTHR  can  be updated with the following procedure.

- 1) Connect the MAX32620FTHR to the PC with a USB cable.
- 2) Open a File Explorer window on the PC.
- 3) Enter the bootloader mode on the MAX32620FTHR by holding the BOOT button down and simultaneously pressing and releasing the RESET button. Release the BOOT button to complete the operation.
- 4) The MAX32620FTHR appears as BOOTLOADER drive in the File Explorer directory heirarchy.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25205EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX25205

- 5) Drag and drop the firmware .bin file into the BOOT -LOADER drive. The MAX32620FTHR blinks its LEDs while it updates the firmware.
- 6) Once the blinking stops, press the RESET button or disconnect and reconnect the USB to restart the MCU.

## Troubleshooting

If  the  software  fails  to  connect  to  the  sensor,  check  the Device Manager to determine if the driver was installed properly.  When  the  EV  kit  is  connected  to  the  PC,  the device should show up under the Ports section as Maxim Serial Port .

Manual connection to the EV kit can be performed under the Device Menu .

│

## MAX25205 EV Kit Bill of Materials

| ITEM         | QTY        | REF DES                                             | VAR STATUS                  | MAXINV                                   | MFG PART #                                                                                                                                            | MANUFACTURER                                         | VALUE                | DESCRIPTION                                                                                                                                                                                            | COMMENTS   |
|--------------|------------|-----------------------------------------------------|-----------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1            | 5          | C1, C3, C5, C10, C15                                | Pref                        | 20-0047U-A38                             | GRM21BR61A476ME15                                                                                                                                     | MURATA                                               | 47UF                 | CAP; SMT (0805); 47UF; 20%; 10V; X5R; CERAMIC CHIP                                                                                                                                                     |            |
| 2            | 2          | C2, C4                                              | Pref                        | 20-0001U-O3                              | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL 885012206071;                                                                   | TAIYO YUDEN;TDK; SAMSUNG;MURATA                      | 1UF                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                                                                                                      |            |
| 3            | 4          | C6, C8, C9, C16                                     | Pref                        | 20-000U1-03                              | CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A; CGA3E2X7R1E104K080AA; GCJ188R71E104KA12 | WURTH ELECTRONICS INC; TDK;TDK;KEMET;AVX; TDK;MURATA | 0.1UF                | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                                                                             |            |
| 4            | 1          | C7                                                  | Pref                        | 20-002U2-L3                              | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                                                                                      | TDK;TAIYO YUDEN; TAIYO YUDEN;MURATA                  | 2.2UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                      |            |
| 5            | 2          | D1, D4                                              | Pref                        | 30-SFH4248-00                            | SFH 4248                                                                                                                                              | OSRAM                                                | SFH 4248             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=1.5V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                  |            |
| 6            | 2          | D2, D3                                              | Pref                        | 30-SFH4249-00                            | SFH 4249                                                                                                                                              | OSRAM                                                | SFH 4249             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=5.0V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                  |            |
| 7            | 1          | J1                                                  | Pref                        | 01-FTSH10801LDVK16P-19                   | FTSH-108-01-L-DV-K                                                                                                                                    | SAMTEC                                               | FTSH-108-01-L-DV-K   | CONNECTOR; MALE; SMT; MICRO HEADER; STRAIGHT; 16PINS                                                                                                                                                   |            |
| 8            | 2          | M1, M2                                              | Pref                        | 90-SQ1912EHT1GE3-32                      | SQ1912EH-T1_GE3                                                                                                                                       | VISHAY SILICONIX                                     | SQ1912EH-T1_GE3      | TRAN; NCH; SC70-6; PD-(1.5W); I-(0.8A); V-(20V)                                                                                                                                                        |            |
| 9            | 1          | MISC1                                               | Pref                        | 02-INLETBLADE-05                         | KTPS12-03320WA-VI-P1                                                                                                                                  | VOLGEN                                               | KTPS12-03320WA-VI-P1 | ACCESSORY; ADAPTER; UNIVERSAL INPUT; WALL MOUNT ADAPTER                                                                                                                                                |            |
| 10           | 1          | MISC2                                               | Pref                        | 01-FFSD08D060001N16P-08                  | FFSD-08-D-06.00-01-N                                                                                                                                  | SAMTEC                                               | FFSD-08-D-06.00-01-N | CONNECTOR; FEMALE; TIGER EYE FLAT IDC WIRE CABLE; WIREMOUNT; 16PINS                                                                                                                                    |            |
| 11           | 3          | R1-R3                                               | Pref                        | 80-004K7-19                              | CRCW06034K70FK                                                                                                                                        | VISHAYDALE                                           | 4.7K                 | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                    |            |
| 12           | 2          | R4, R5                                              | Pref                        | 80-0100R-53                              | CRCW0603100RJN; ERJ-3GEYJ101                                                                                                                          | VISHAY DALE;PANASONIC                                | 100                  | RESISTOR; 0603; 100 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                                 |            |
| 13           | 13         | R8, R10, R17, R18, R23, R24, R38, R58, R59, R61-R64 | Pref                        | 80-0000R-AA6                             | CRCW06030000Z0                                                                                                                                        | VISHAYDALE                                           |                      | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                                  |            |
| 14           | 8          | R9, R20, R28, R48, R65-R68                          | Pref                        | 80-012R4-AA77                            | ERJ-8ENF12R4                                                                                                                                          | PANASONIC                                            | 12.4                 | RES; SMT (1206); 12.4; 1%; +/-100PPM/DEGC; 0.25W                                                                                                                                                       |            |
| 15           | 3          | R11-R13                                             | Pref                        | 80-0022R-24                              | CRCW060322R0FK; CRCW060322R0FKEA                                                                                                                      | VISHAY;VISHAY                                        | 22                   | RESISTOR; 0603; 22 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                  |            |
| 16           | 1          | R14                                                 | Pref                        | 80-0390R-24                              | CRCW0603390RFK                                                                                                                                        | VISHAYDALE                                           | 390                  | RESISTOR; 0603; 390 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                 |            |
| 17           | 1          | R56                                                 | Pref                        | 80-0000R-BA47                            | CRCW08050000Z0EAHP; HCJ0805ZT0R00                                                                                                                     | VISHAY;STACKPOLE ELECTRONICS INC.                    | 0                    | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                                                                                                                    |            |
| 18           | 1          | U1                                                  | Pref                        | 00-SAMPLE-02                             | MAX25205EQP/VY+                                                                                                                                       | MAXIM                                                | MAX25205EQP/VY+      | EVKIT PART - IC; GESTURE SENSOR FOR AUTOMOTIVE APPLICATIONS; OCQFN20-EP 4MM X 4MM X 1.40MM; 0.5MM PITCH; PACKAGE OUTLINE DRAWING: 21- 100404; PACKAGE LAND PATTERN: 90- 100083; PACKAGE CODE: Q2044Y+2 |            |
| 19           | 1          | PCB                                                 | -                           | N/A                                      | MAX25105_SENSORBOARD_                                                                                                                                 | MAXIM                                                | PCB                  | PCB:MAX25105_SENSORBOARD_                                                                                                                                                                              | -          |
|              | 54         |                                                     |                             |                                          | APPS_B                                                                                                                                                |                                                      |                      | APPS_B                                                                                                                                                                                                 |            |
| TOTAL        | TOTAL      | TOTAL                                               | TOTAL                       | TOTAL                                    | TOTAL                                                                                                                                                 | TOTAL                                                | TOTAL                | TOTAL                                                                                                                                                                                                  | TOTAL      |
| DO NOT ITEM  | QTY        | PURCHASE(DNP) REF DES                               | VAR STATUS                  | MAXINV                                   | MFG PART #                                                                                                                                            | MANUFACTURER                                         | VALUE                | DESCRIPTION                                                                                                                                                                                            | COMMENTS   |
| 1            | 2          | C11, C13                                            | DNP                         | 20-0010P-F9                              | C0402C100J5GAC; GRM1555C1H100JA01                                                                                                                     | KEMET;MURATA                                         | 10PF                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                               | DNI        |
| 2            | 2          | D1B, D4B                                            | DNP                         | 30-SFH4248-00                            | SFH 4248                                                                                                                                              | OSRAM                                                | SFH 4248             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=1.5V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                  | DNI        |
| 3            | 3          | D2B, D3B, D5                                        | DNP                         | 30-SFH4249-00                            | SFH 4249                                                                                                                                              | OSRAM                                                | SFH 4249             | DIODE; LED; INFRARED EMITTER; INFRARED; SMT; PIV=5.0V; IF=0.1A; -40 DEGC TO +100 DEGC                                                                                                                  | DNI        |
| 4            | 1          | J2                                                  | DNP                         | 01-PCC03SAAN3P-21                        | PCC03SAAN                                                                                                                                             | SULLINS                                              | PCC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                               | DNI        |
| 5            | 12         | R6, R7, R15, R16, R19, R21, R22, R40-R43, R60       | DNP                         | 80-0000R-AA6                             | CRCW06030000Z0                                                                                                                                        | VISHAYDALE                                           |                      | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                                  | DNI        |
| 6            | 1          | R55                                                 | DNP                         | 80-0001K-24                              | CRCW06031K00FK; ERJ-3EKF1001                                                                                                                          | VISHAY DALE;PANASONIC                                | 1K                   | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                      | DNI        |
| PACKOUT ITEM | (These QTY | are purchased parts but REF DES                     | not assembled on VAR STATUS | PCB and will be shipped with PCB) MAXINV | MFG PART #                                                                                                                                            | MANUFACTURER                                         | VALUE                | DESCRIPTION                                                                                                                                                                                            | COMMENTS   |

Evaluates: MAX25205

## MAX25205 EV Kit Schematic

<!-- image -->

## MAX25205 EV Kit Layout

<!-- image -->

Silk Top

<!-- image -->

Top

<!-- image -->

Layer1

<!-- image -->

Layer2

<!-- image -->

Bottom

Silk Bottom

<!-- image -->

Assembly Bottom

<!-- image -->

Evaluates: MAX25205

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------|-----------------|
|                 0 | 2/20            | Initial release                               | -               |
|                 1 | 12/20           | Updated General Description and EV Kit Layout | 1, 10           |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25205