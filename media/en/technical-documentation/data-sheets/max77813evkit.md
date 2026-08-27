<!-- lastmod 2022-08-02 -->
## MAX77813 Evaluation Kit

## General Description

This evaluation kit (EV kit) provides a proven design to evaluate  the  MAX77813,  a  2A  buck-boost  converter. Input voltage range is between 2.3V and 5.5V and output voltage range is from 2.6V to 5.14V. The factory default output voltage of this EV kit is set at 3.3V. Output voltage can be adjusted through the MINIQUSB interface board. The  board  enables  communication  with  Windows ® compatible software to emulate an I 2 C interface.

Evaluates: MAX77813

## Benefits and Features

- Proven PCB Reference Design and Layout
- Fully Assembled and Tested
- Accessible Test Points for EN, POK, and ILIM
- MINIQUSB Interface Board and User-Friendly GUI for Full Control

Ordering Information appears at end of data sheet.

Figure 1. MAX77813 Evaluation Board

<!-- image -->

Figure 2. MINIQUSB Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX77813 Evaluation Kit

## Quick Start

Follow this procedure to familiarize yourself with the EV kit. Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77813 EV kit
- MINIQUSB command module (optional, USB cable included)
- Adjustable DC power supply
- A 1.8V DC power supply (optional)
- Digital multimeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect the MINIQUSB interface board (if I 2 C control is required to test).
- 3) Preset the DC power supply to 3.8V. Turn off the power supply. Do not turn on the power supply until all connections are completed.

## Table 1. Jumper Settings

| JUMPER   | NODE OR FUNCTION      | SHUNT POSITION   | FUCNTION                                                                        |
|----------|-----------------------|------------------|---------------------------------------------------------------------------------|
| JU1      | VIO                   | 1-2*             | VIO is supplied from an onboard 1.8V LDO (U1)                                   |
| JU1      | VIO                   | 2-3              | VIO is supplied from MINIQUSB board                                             |
| JU2      | EN                    | 1-2              | Connecting EN to VIO (MAX77813 is enabled)                                      |
| JU2      | EN                    | 2-3*             | Connecting EN to GND (MAX77813 is disabled)                                     |
| JU3      | ILIM                  | 1-2              | Connecting ILIM to VIO, inductor current is limited by high current limit level |
| JU3      | ILIM                  | 2-3*             | Connecting ILIM to VIO, inductor current is limited by low current limit level  |
| JU4      | Input for Onboard LDO | OPEN             | Disconnect onboard LDO input                                                    |
| JU4      | Input for Onboard LDO | 1-2*             | Inboard LDO is supplied from VIN                                                |
| JU5      | SDAPull Up            | OPEN*            | No pull-up for SDA                                                              |
| JU5      | SDAPull Up            | 1-2              | SDApin is pulled up to VIO through 2.2kΩ                                        |
| JU6      | SCL Pull Up           | OPEN*            | No pull-up for SCL                                                              |
| JU6      | SCL Pull Up           | 1-2              | SCL pin is pulled up to VIO through 2.2kΩ                                       |

Evaluates: MAX77813

- 4) Connect the EV kit to the power supply and meters. Adjust the ammeters to their largest current range to minimize their series impedance. Do not allow the ammeters to operate in their auto-range mode. If current readings are not desired, short across the ammeters.
- 5) Turn on the power supply.
- 6) Switch JU2 to VIO (1-2) to enable the MAX77813.
- 7) Apply load for desired test.

If  reading  the  register  (e.g.,  reading  status  register)  or writing to the register (e.g., programming specific output voltage) is required, then:

- 8) Visit www.maximintegrated.com/products/ MAX77813 under the Design Resources to download the latest version of the EV kit software, MAX77813Rxx.ZIP. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 9) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied, and icons are created in the Windows Start | Programs menu.
- 10)  Connect the USB cable from the PC to the MINIQUSB board.
- 11)  Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 3.
- 12)  The EV kit is now ready for testing.

│

## Detailed Description of Software

The GUI shown in Figure 3 is the main window of the EV kit software that provides a convenient means to control the  IC.  Use  the  mouse  to  navigate  through  the  GUI controls.

The  EV  kit  software  main  window  consists  of  group boxes, checkboxes, and pushbuttons of the CHIP ID read, STATUS of alarm, configuration Register 1 and 2, and the VOUT setting register. Refer to the register descriptions in the data sheet for more information.

## Detailed Description of Hardware

The  MAX77813  EV  kit  demonstrates  the  MAX77813 buck-boost. It regulates output from input voltage ranges from  2.3V  to  5.5V.  Programmable  output  range  is  from 2.6V to 5.14V with 20mV step. The EV kit is suited with a general DC input. By connecting an external MINIQUSB, and  launching  the  EV  kit  software,  the  user  can  adjust the output voltage and check the status of the buck-boost on the EV kit GUI. Table 1 lists jumpers and associated functions that are available on the EV kit.

Figure 3. MAX77813 Evaluation Kit Software Window (CHIPID/STATUS/CONFIG Tab)

<!-- image -->

│

## MAX77813 Evaluation Kit

## Component List

| PART          |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 10μF ±5%, 6.3V X5R ceramic capacitor (0603), TDK CGB3C1X5R0J106M065AC     |
| C2, C8, C9    |     3 | 1μF ±10%, 6.3V X5R ceramic capacitor (0402), MURATAGRM155R60J105KE19      |
| C3            |     1 | 0.1μF ±10%, 10V X5R ceramic capacitor (0402), TAIYO-YUDEN LMK105BJ104KV-F |
| C4            |     1 | 47μF ±20%, 6.3V X5R ceramic capacitor (0805), TDK C2012X5R0J476M125AC     |
| J1            |     1 | Right angle connector, 20-pins, SULLINS ELECTRONICS CORP. PPTC102LJBN-RC  |
| JU1, JU2, JU3 |     3 | Straight connector, 3-pins, SAMTEC TSW-103-07-L-S                         |
| JU4, JU5, JU6 |     3 | Straight connector, 2-pins, SAMTEC TSW-102-07-T-S                         |
| L1            |     1 | 1μH ±20%, ISAT = 8.7A, DCR = 13.25mΩ, COILCRAFT XAL4020-102ME             |
| R1            |     1 | 100kΩ ±1%, resistor (0402)                                                |
| R2, R3        |     2 | 2.2kΩ ±1%, resistor (0402)                                                |
| R4            |     1 | 0Ω, resistor (0402)                                                       |
| U1            |     1 | Buck-boost (20-WLP), MAX77813EWP33+                                       |
| U2            |     1 | Voltage regulator, MAX8511EXK18+                                          |
| -             |     1 | PCB: MAX77813 EVALUATION KIT                                              |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE                     |
|---------------------------|--------------|-----------------------------|
| TDK                       | 847-803-6100 | www.comopnent.tdk.com       |
| MURATA                    | 770-436-1300 | www.murata-northamerica.com |
| TAIYO-YUDEN               | 603-669-7587 | www.t-yuden.com             |
| SULLINS ELECTRONICS CORP. | 760-774-0125 | www.sullinselectronics.com  |
| SAMTEC                    | 800-726-8329 | www.samtec.com              |
| COILCRAFT                 | 847-639-6400 | www.coilcraft.com           |

Note:

Indicate that you are using the MAX77813 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77813EVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

Evaluates: MAX77813

│

## MAX77813 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX77813

## MAX77813 EV Kit PCB Layouts

MAX77813 EV Kit Component Placement Guide-Top Side

<!-- image -->

MAX77813 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX77813 EV Kit PCB Layout-Top Side

<!-- image -->

MAX77813 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX77813 EV Kit PCB Layouts (continued)

MAX77813 EV Kit PCB Layout-Layer 4

<!-- image -->

MAX77813 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77813 EV Kit PCB Layout-Layer 5

<!-- image -->

MAX77813 EV Kit PCB Layout-Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77813