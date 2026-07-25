<!-- lastmod 2022-08-03 -->
## MAX77863 Evaluation Kit

## General Description

The MAX77863 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the  highly-integrated  MAX77863  PMIC. The  MAX77863 is  a  complete power management IC (PMIC) for mobile devices using system-on-chip (SoC) application processors. The IC includes four buck regulators, nine low dropout linear regulators, eight GPIOs, real-time clock (RTC), backup battery  charger,  bidirectional  reset  I/O,  interrupt output, and a system watchdog timer.

The EV kit  uses  a  MAXUSB  daughter  board  command module that provides the I 2 C  interface  to  control  power sequence, individual regulator output on/off, GPIOs, RTC, and setting the regulator output voltage.

Windows ® -based software provides a user-friendly graphical interface for easy evaluation.

Figure 1. MAX77863 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77863

## Features and Benefits

- USB-to-I 2 C Converter Allows for Easy Communication
- Level Translator Allows for Adjusting I 2 C Bus Voltage from 1.8V to 3.3V
- Proven PCB Reference Design and Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX77863 Evaluation Kit

## Quick Start

Follow  this  procedure  to  familiarize  yourself  with  the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77863 EV kit
- MAXUSB board
- Dual power supply with 6V and 5A capability
- Digital voltmeter (DVM)
- Ammeter
- Micro-USB cable

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Install all shunts as recommended in Table 1.
- 2) Connect a disabled 3.6V bench power supply through an ammeter to MBATT and GND6 wire loops.  Set the input current limit of the bench supply to 1A.
- 3) Enable the output of the 3.6V bench power supply.
- 4) Connect J2 of the MAXUSB to J7 of the EV kit with both boards facing upright (silkscreen up).
- 5) Connect a Micro-B USB cable from J1 of the MAXUSB and the PC.
- 6) Wait a few seconds for your computer to install the USB driver. Once the driver is successfully installed, a Windows pop-up message is shown saying that the 'USB Serial Converter' is ready to use.
- 7) Open the MAX77863 GUI.
- 8) In the upper left corner of the GUI, select Device → Connect as shown in Figure 2. Once connected, a pop-up is shown as in Figure 3. Click on the Read and Close button.
- 9) Press and hold SW1 on the EV kit for 1 second.
- 10)  See Table 2 for default voltages and FPS settings.

## Evaluates: MAX77863

Figure 2. Connecting to the EV Kit

<!-- image -->

Figure 3. List of Devices

<!-- image -->

This concludes the initial setup procedure. Users are now encouraged to explore the device and its register settings with  the  GUI.  During  this  exploration,  be  mindful  of  the power  supply  current  limit  and  input  current  ammeter's range  so  as  not  to  interfere  with  the  operation  of  the device under test.

│

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                          |
|------------------------|--------------------|---------------------------------------------------|
| J3                     | Open               | ACOK = Open                                       |
| J4                     | 1-2                | Connects VLOGIC to MBATT                          |
| J5                     | 1-2                | Connects GPIOINA to MBATT                         |
| J6                     | 1-2                | Connects GPIOINB to MBATT                         |
| J7                     | Open               | Connects MAX77863 EV Kit to MAXUSB Daughter Board |
| J8                     | 1-2                | Connects SHDN to MBATT                            |
| J9                     | 1-2                | Connects LID to MBATT                             |
| J12                    | 2-3                | Connects EN1 to GND                               |
| J13                    | 1-2                | Connects EN2 to VLOGIC                            |

## Table 2. Default Flexible Power Sequencing (FPS) Setting (MAX77863A)

|        |                  | FPS SETTING    | FPS SETTING     | FPS SETTING       |
|--------|------------------|----------------|-----------------|-------------------|
| OUTPUT | EXPECTED VOLTAGE | FPS SOURCE     | POWER-UP (SLOT) | POWER-DOWN (SLOT) |
| SD0    | 0.9              | FPS0           | 2               | 5                 |
| SD1    | 1.1              | FPS0           | 6               | 1                 |
| SD2    | 0.9              | FPS0           | 1               | 6                 |
| SD3    | 1.8              | FPS0           | 0               | 7                 |
| LDO0   | 1.8              | Not Configured | 0               | 0                 |
| LDO1   | 1.8              | FPS0           | 6               | 1                 |
| LDO2   | 3.3              | FPS0           | 3               | 4                 |
| LDO3   | 1.8              | FPS0           | 3               | 4                 |
| LDO4   | 0.8              | FPS0           | 6               | 1                 |
| LDO5   | 1.8              | FPS0           | 4               | 3                 |
| LDO6   | 1.8              | FPS0           | 5               | 2                 |
| LDO7   | 0.85             | FPS0           | 2               | 5                 |
| LDO8   | 1.8              | FPS0           | 3               | 4                 |
| GPIO1  | N/A              | FPS0           | 7               | 0                 |
| GPIO2  | N/A              | FPS0           | 7               | 0                 |
| GPIO3  | N/A              | FPS0           | 7               | 0                 |

│

Evaluates: MAX77863

## MAX77863 Evaluation Kit

## EV Kit Features

## Configuring the Buck Regulators

The IC features several different programmable options to customize the behaviors of the four integrated buck regulators during startup, operation, and shutdown. Figure 4 shows the portion of the GUI window that allows for configuration of the buck regulators. Drag the slider and click Write to change the output voltage. Other features of the buck regulators which can be changed here include the power  modes,  operating  modes,  and  enabling/disabling the active discharge resistors.

SD0 and SD1 also feature a software-controllable remote sense which can be disabled here.

## Configuring the LDOs

The IC features several different  programmable options to  customize the behaviors of the nine integrated LDOs during startup, operation, and shutdown. Figure 5 shows the portion of the GUI window that allows for configuration of  the  LDOs. Drag the slider and Click write  to  change the output voltage.  Other features of the LDOs can also be configured here such as the active discharge resistors and soft-start slew rates.

## Configuring the Flexible Power Sequencer

The  IC  features  different  power-up/down  configurations based on Maxim's flexible power sequencer technology. The power-up/down sequence must be configured prior to any wake-up event and must be reconfigured after any event which causes the registers to reset such as powerdown or undervoltage lockout.

To evaluate the device with a different power-up voltage, use the following instructions:

- 1) Follow steps 2-8 of the Quick Start procedure. Do not go to step 9.
- 2) Go to the ' FPS ' section of the GUI and configure the desired power-up/down sequence.
- 3) Press and hold SW1 for 1 second and monitor the PMICs resources. The resources should power-up in the new desired power-up sequence.
- 4) Press and hold SW1 for 3 seconds to initiate a power-down and monitor the PMICs resources. The resources should power-down in the new desired power-down sequence.
- 5) Note that the power-down event resets the device's register settings. The power-up/down sequences need to be rewritten again prior to power-up.
- 6) Different power-up/down sequences can be prepro -grammed at the factory.

Figure 4. Step Down Configuration Portion of the EV Kit GUI

<!-- image -->

│

Figure 5. LDO Configuration Portion of the EV Kit GUI

<!-- image -->

Figure 6. FPS Configuration Portion of the EV Kit GUI

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX77863EVKIT# | EVKIT  |

## MAX77863 EV Kit Bill of Materials

| Item   |   QTY | REFERENCE DESIGNATOR                                                                                         | DESCRIPTION                                                                              | PART NAME                                                                                      | VALUE     | ASSEMBLY INSTRUCTIONS            |
|--------|-------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|-----------|----------------------------------|
| 1      |     1 | BATT                                                                                                         | 3.0V Manganese Li+ Rechargeable SMD                                                      | Panasonic - BSG, ML614S/F9FE (Digi- key P297-ND)                                               |           | Do not stuff                     |
| 2      |     7 | C12-13 C42 C44-47                                                                                            | 0.1uF, 10V, X5R, Ceramic capacitor, 0402                                                 | Murata, GRM155R61A104KA01D                                                                     | 0.1uF     |                                  |
| 3      |    10 | C14-20 C22-24                                                                                                | 1.0uF, 6.3V, X5R, ±10% Ceramic Capacitor, 0402                                           | Murata, GRM155R60J105KE19D                                                                     | 1.0uF     |                                  |
| 4      |    12 | C28 C31 C33-35 C38-39 C49-50 C52-54                                                                          | 1.0uF, 6.3V, X5R, ±10% Ceramic Capacitor, 0402                                           | Murata, GRM155R60J105KE19D                                                                     | 1.0uF     | Do not stuff                     |
| 5      |     2 | C9 C11                                                                                                       | 10uF, 6.3V, X5R ±20% Ceramic Capacitor, 0805                                             | Taiyo-Yuden, JMK212BJ106MG-T                                                                   | 10uF      |                                  |
| 6      |     3 | C5 C8 C10                                                                                                    | 2.2uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0603                                          | Taiyo Yuden, JMK107BJ225MA                                                                     | 2.2uF     |                                  |
| 7      |     2 | C21 C30                                                                                                      | 2.2uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0402                                          | Murata, GRM155R60J225ME19D                                                                     | 2.2uF     |                                  |
| 8      |     5 | C32 C36 C51 C55-56                                                                                           | 2.2uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0402                                          | Murata, GRM155R60J225ME19D                                                                     | 2.2uF     | Do not stuff                     |
| 9      |     6 | C2 C4 C6-7 C26-27                                                                                            | 22uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0805                                           | Taiyo-Yuden, JMK212BJ226KA                                                                     | 22uF      |                                  |
| 10     |     2 | C1 C3                                                                                                        | 4.7uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0805                                          | Taiyo Yuden, JMK212BJ475KG                                                                     | 4.7uF     |                                  |
| 11     |     1 | C29                                                                                                          | 4.7uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0603                                          | Murata, GRM188R60J475KE19D                                                                     | 4.7uF     |                                  |
| 12     |     1 | C37                                                                                                          | 4.7uF, 6.3V, X5R, ±20%, Ceramic Capacitor, 0603                                          | Murata, GRM188R60J475KE19D                                                                     | 4.7uF     | Do not stuff                     |
| 13     |     4 | C25 C40-41 C43                                                                                               | Open ceramic capacitor, 0402                                                             |                                                                                                | OPEN      | Do not stuff                     |
| 14     |     1 | C57                                                                                                          | 100uF, 6.3V, Tantalum Capacitor, 1210                                                    | AVX, TCJB107M006R0045                                                                          | 100uF     |                                  |
| 15     |     1 | J7                                                                                                           | 2X9 RIGHT ANGLE RECEPTACLE(0.1IN)                                                        | Sullins, PPPC092LJBN-RC                                                                        |           |                                  |
| 16     |     1 | C48                                                                                                          | 0.02F 3.3V Coin Capacitor, 3.8mm diameter, 1.55mm max height.                            | Seiko Instruments Inc., XH311HG- IV07E                                                         | 0.02F     |                                  |
| 17     |     1 | J14                                                                                                          | 1x4 HEADER 0.1"                                                                          | SAMTEC, TSW-150-05-T-S (Digi-key, SAM1019-50-ND) this is a 1x50 header than is hand cut to 1x4 |           |                                  |
|        |     8 | J3-6 J8-9 J12-13                                                                                             | 1x3 HEADER 0.1"                                                                          | SAMTEC, TSW-150-05-T-S (Digi-key, SAM1019-50-ND) this is a 1x50 header then is hand cut to 1x3 |           |                                  |
| 18 19  |     3 | L0 L1 L4                                                                                                     | 1uH, 4.2A, 33mOhm Inductor                                                               | Toko, DFE252012F-1R0M                                                                          | 1uH       |                                  |
| 20     |     2 | L2 L3                                                                                                        | 1uH, 3.5A, 40mOhm Inductor                                                               | Toko, DFE201612E-1R0M                                                                          | 1uH       |                                  |
| 21     |     1 | D1                                                                                                           | Surface Mount LED RED, 0603                                                              | LITE-ON, LTST-C190YKT                                                                          |           |                                  |
|        |     5 | GND GND5-7 MBATT                                                                                             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG | WEICO WIRE, 9020 BUSS                                                                          | Maxim Pad |                                  |
| 22 23  |     1 | U1                                                                                                           | 9X10 WLP PMIC                                                                            | Maxim, MAX77863AEWJ+                                                                           |           |                                  |
| 24     |    10 | R4-6 R12 R68-70 R83 R102 R117                                                                                | 0 ohm SMT Resistor, 0805                                                                 |                                                                                                | 0         |                                  |
| 25     |    20 | R24 R36 R67 R13-14 R16 R80-82 R17 R84-85 R18 R106 R108-112 R19                                               | 0 ohm SMT Resistor, 0402                                                                 |                                                                                                | 0         |                                  |
| 26     |     4 | R22 R39 R41 R65                                                                                              | 100K SMT Resistor, 0402                                                                  |                                                                                                | 100K      |                                  |
| 27     |    19 | R1 R3 R28 R31 R34 R37 R40 R43 R46 R49 R52 R56 R59 R62 R73-76 R89                                             | 22 ohm SMT Resistor, 0402                                                                |                                                                                                | 22        |                                  |
| 28     |     1 | R71                                                                                                          | 220 ohm SMT Resistor, 0402                                                               |                                                                                                | 220       |                                  |
|        |    32 | R2 R15 R20-21 R23 R25-27 R29-30 R32-33 R35 R38 R42 R44-45 R47-48 R50-51 R53-55 R57-58 R60-61 R63-64 R66 R100 | Open SMT Resistor, 0402                                                                  |                                                                                                | open      | Do not stuff                     |
| 29     |     1 | R11                                                                                                          | Open SMT Resistor, 0805                                                                  |                                                                                                | open      | Do not stuff                     |
| 30     |     2 | J1-2                                                                                                         | SMA 50 Ohm straight PC Mount Jack                                                        | Johnson, 142-0701-231                                                                          |           | Do not stuff                     |
| 31 32  |     2 | SW1-2                                                                                                        | Receptacle Switch, momentary, normally open                                              | Panasonic, EVQ-Q2K03W                                                                          |           |                                  |
| 33     |    22 | 9 11 13 15 BBAT INI2C INSD LDO0-8 VSD0-4                                                                     | Test Point, Red                                                                          | Keystone, 5010 (Digikey Part Number 5010K-ND)                                                  |           |                                  |
| 34     |     4 | GPIOINA GPIOINB VDD VLOGIC                                                                                   | Test Point, Red                                                                          | Keystone, 5000 (Digikey Part Number 5000K-ND)                                                  |           |                                  |
|        |    19 | EN0-2 GPIO0-2 LID NIRQ NRST_IO SCL SDA SHDN ACOK 32KOUT GPIO3-7                                              | Test Point, White                                                                        | Keystone, 5002 (Digikey Part Number 5002K-ND)                                                  |           |                                  |
| 35     |     1 | PACK-OUT                                                                                                     | MAXUSB_INTERFACE BOARD, MAXIM                                                            | MAXUSB_INTERFACE                                                                               |           | Please include this in box stock |
| 36     |     3 | GND1 GND4 GND0                                                                                               | Test Point, Black                                                                        | Keystone, 5011 (Digikey Part Number 5011K-ND)                                                  |           |                                  |
| 37     |     1 | Y1                                                                                                           | Crystal Oscillator, 32.768kHz                                                            | EPSON, FC-13532.7680KA-A                                                                       | 32.768khz |                                  |

Evaluates: MAX77863

## MAX77863 EV Kit Schematic

<!-- image -->

## MAX77863 EV Kit Schematic (continued)

<!-- image -->

## MAX77863 EV Kit Schematic (continued)

<!-- image -->

## MAX77863 EV Kit Schematic

MAX77863 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77863 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77863 EV Kit PCB Layout-Layer 2 Route + GND

<!-- image -->

MAX77863 EV Kit PCB Layout-Layer 3 Routing

<!-- image -->

│

## MAX77863 EV Kit Schematic

MAX77863 EV Kit PCB Layout-Layer 4 GND

<!-- image -->

MAX77863 EV Kit PCB Layout-Layer 5 Power

<!-- image -->

MAX77863 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77863 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX77863 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                            | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------|-----------------|
|                 0 | 10/19           | Initial release                        | -               |
|                 1 | 6/20            | Replaced schematic and corrected typos | 1-3, 7-9        |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied  0a[iP Integrated reserves the right to change the circuitr\ and specifications without notice at an\ tiPe

│

Evaluates: MAX77863