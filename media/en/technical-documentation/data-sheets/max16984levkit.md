<!-- lastmod 2022-08-02 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

## General Description

The  MAX16984L  evaluation  kit  (EV  kit)  demonstrates the  MAX16984L  automotive  high-efficiency  step-down DC-DC converter with integrated USB protection and host charger adapter.

The  MAX16984L  features  integrated  host-charger  portdetection  circuitry  adhering  to  the  USB  2.0  BC1.2  bat -tery charging specification and also features circuitry for Apple ®   iPod ® /iPhone ® 1.0A  and  iPad ® 2.1A  dedication charging modes.

The MAX16984L integrates high-side current sensing and voltage-adjustment circuitry that provides automatic USB voltage  adjustment  to  compensate  for  voltage  drops  in captive cables associated with automotive applications.

The  MAX16984L  step-down  DC-DC  converter  operates from a voltage of up to 28V continuous and is protected from load dump transients to 42V. The converter is resis -tor-programmable for frequencies from 220kHz to 2.2MHz and can deliver 2.1A continuously.

The EV kit is configured for 2.2MHz operation, and the included 3-meter USB cable allows for demonstration of the  cable  compensation  capability  of  the  MAX16984L. This  EV  kit  has  been  tuned  for  optimal  EYE  quality  at the end of the supplied USB cable; this tuning method is referred to as far-eye tuning. The USB 2.0 high-speed eye diagram for this EV kit is shown in Figure 1 .

## Features

- Configurable Charge Detection Modes
- USB-IF BC1.2 CDP, DCP
- Apple 2.1A, 1.0A
- China YD/T1591-2009 Charging Specification
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter (220kHz to 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

Apple, iPod, iPhone, and iPad are registered trademarks of Apple, Inc.

## MAX16984L Evaluation Kit

## Quick Start

## Required Equipment

The EV kit comes configured as follows:

- SW1: CD0 = 0, CD1 = 1: Set up to enumerate an iPad or USB2.0 BC1.2-compliant portable device
- SW2: BUCKEN = 1, SYNCEN = 0: HVBUS supply enabled
- Current limit: 2.3A: R7 = 4.22kΩ
- Switching frequency: 2.2MHz: R2 = 12.1kΩ
- Current sensing bandwidth: 114kHz: R7 = 4.22kΩ, C7 = 330pF
- Voltage adjustment bandwidth: 104kHz: R8 = 4.64kΩ, C9 = 330pF
- Voltage adjustment performance: 25%: FBPER pin pulled to ground with 0Ω jumper
- Maximum voltage adjustment: occurs at 2.1A: R8 (RFBMAX) = 4.64kΩ
- Forced-PWM: enabled: SYNC pin tied to 3.3V with jumper; remove jumper to enable SKIP mode

Battery-voltage  input  should  be  connected  between  the EXT\_VBAT  and  GND2  test  loops.  The  MAX16984L's DC-DC  converter  output  voltage  can  be  measured between  HVBUS  and  GND1  nodes  or  between  the ground and +5V pins of the USB connector. To disable the voltage-adjustment feature, connect the FBMAX node on JU1 to the ground. The FAULT output is active-high.

Ordering Information appears at end of data sheet.

319-100836; Rev 1; 11/21

owners.

## MAX16984L Evaluation Kit

## Evaluation Kit Setup

Figure 1. MAX16984L Evaluation Kit Configuration

<!-- image -->

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

## MAX16984L Evaluation Kit

## External Digital Interface Header

Header  JU1  is  provided  to  allow  access  to  the  device control signals. Table 1 lists the individual pins and their functions.

SW1 controls the inputs for CD0 and CD1. The MAX16984L charge detection modes can be selected by enabling or disabling the appropriate DIP switch. Table 2 shows the switch configuration for the different charge modes.

JU1 pins 5 and 6 can also be used to control the charge mode externally.

SW2  controls  the  inputs  for  the  MAX16984L  BUCKEN and  SYNC  pins.  The  switch  selections  are  shown  in Table 3. Header JU1 pin 3 allows external control of the ENBUCK input, and JU1 pin 7 may be used to externally control the SYNC pin.

## Table 1. External Digital Interface

|   JU1 PIN | NAME   | DESCRIPTION                                  |
|-----------|--------|----------------------------------------------|
|         1 | FBMAX  | Voltage-adjustment feedback (output)         |
|         2 | SENSO  | Current sense (output)                       |
|         3 | ENBUCK | Active-low enable for buck regulator         |
|         4 | FAULT  | Active-high FAULT (output)                   |
|         5 | CD1    | Charge-detection configuration bit 1 (input) |
|         6 | CD0    | Charge-detection configuration bit 0 (input) |
|         7 | SYNC   | Buck regulator SYNC (input)                  |
|         8 | IN     | Evaluation kit 3.30V bias (input)            |
|         9 | GND    | Evaluation kit ground                        |

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

## Evaluating Buck SKIP Mode

## Equipment Required

- MAX16984L evaluation kit
- Bench power supply able to source 14VDC/4A
- Digital voltmeter
- Oscilloscope

## Procedure

- 1) Configure SW1 and SW2.
- 2) Setup test equipment as shown in Figure 3.
- 3) Observe the oscilloscope waveform is similar to Figure 4 .

## Table 2. SW1 Charge Mode Configuration

|   CD1 |   CD0 | MODE                               |
|-------|-------|------------------------------------|
|     0 |     0 | High-speed pass-through            |
|     0 |     1 | Full-speed/low-speed with CDP      |
|     1 |     0 | DCP/Apple 2.1A with auto detection |
|     1 |     1 | DCP/Apple 1.0A with auto detection |

## Table 3. SW2 Buck Supply Enable and SYNC Pin Direction

Figure 2. DIP Switch Selections for Buck SKIP Mode

| SW2      |   STATE | DESCRIPTION                                  |
|----------|---------|----------------------------------------------|
| PINS 1-4 |       0 | BUCKEN: Buck supply DISABLED                 |
| PINS 1-4 |       1 | BUCKEN: Buck supply ENABLED                  |
| PINS 2-3 |       0 | SYNC: DISABLED &#124; Buck SKIP Mode ENABLED |
| PINS 2-3 |       1 | SYNC: ENABLED &#124; Buck in FORCED PWM mode |

<!-- image -->

## MAX16984L Evaluation Kit

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

Figure 3. Test Setup for Buck SKIP Mode

<!-- image -->

Figure 4. Oscilloscope Measurement for Buck SKIP Mode

<!-- image -->

## MAX16984L Evaluation Kit

## Evaluating Buck Forced PWM Mode

## Equipment Required

- MAX16984L evaluation kit
- Bench power supply able to source 14VDC/4A
- Digital voltmeter
- Oscilloscope

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

## Procedure

- 1) Configure SW1 and SW2 as depicted in Figure 5.
- 2) Setup test equipment as shown in Figure 6 , with PS1 DISABLED.
- 3) Set bench power supply PS1 to 14V, and ENABLE the output.
- 4) Observe that the oscilloscope waveform is similar to that shown in Figure 7.

Figure 5. DIP Switch Selections for Buck Forced PWM Mode

<!-- image -->

Figure 6. Test Setup for Buck FORCED PWM Mode

<!-- image -->

## MAX16984L Evaluation Kit

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

Figure 7. Oscilloscope Measurement for Buck FORCED PWM Mode

<!-- image -->

## Evaluating Cable Compensation

## Equipment Required

- MAX16984L evaluation kit
- Bench power supply able to source 14VDC/4A
- 2x digital voltmeters
- 2-meter USB extension cable, Type-A (male) to Type-A (female)
- 2.5Ω/20W load resistor connected between the VBUS and GND pins of a USB-A plug (male)

## Procedure

- 1) Set DIP switches SW1 and SW2 as shown in Figure 8 .
- 2) Setup test equipment as shown in Figure 9 with PS1 DISABLED and the 2.5Ω load resistor unplugged.
- 3) ENABLE PS1 and observe that the DC voltage mea -sured by both DMM1 and DMM2 are approximately 5.1V.
- 4) Insert the USB-A plug with the 2.5Ω load resistor at the far end of the 2-meter extension cable.
- 5) Observe that the DC voltage measured by DMM1 (HVBUS on the evaluation kit) is approximately 6.05V, and the DC voltage measured by DMM2 (across the 2.5Ω load resistor at the far end of the extension cable) is approximately 5.25V.

## MAX16984L Evaluation Kit

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

Figure 8. SW1 and SW2 Selections for SKIP Mode

<!-- image -->

Figure 9. Setup for Evaluating Cable Compensation

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16984LEVKIT# | EV Kit |

## MAX16984L Evaluation Kit

## MAX16984L EV Kit Bill of Materials

|   QTY | REF DES               | MFG PART #           | MANUFACTURER                     | VALUE              | DESCRIPTION                                         |
|-------|-----------------------|----------------------|----------------------------------|--------------------|-----------------------------------------------------|
|     4 | BUMPER1-BUMPER4       | SJ-5306(CLEAR)       | 3M ELECTRONIC SOLUTIONS DIVISION | SJ-5306(CLEAR)     | BUMPER PAD                                          |
|     1 | C1                    | GRM32ER71E226M       | MURATA;MURATA;TDK                | 22UF               | SMT CERAMIC CAPACITOR, 25V, X7R, 1210               |
|     1 | C2                    | GRM1885C1H222JA01    | MURATA                           | 2200PF             | SMT CERAMIC CAPACITOR, 50V, 0603                    |
|     2 | C3, C6                | C2012X5R1H475K125AB  | TDK                              | 4.7UF              | SMT CERAMIC CAPACITOR, 50V, X5R, 0805               |
|     1 | C4                    | EEE-1HA470XP         | PANASONIC                        | 47UF               | SMT ALUMINUM-ELECTROLYTIC CAPACITOR, 50V, CASE D8   |
|     6 | C5, C10, C17-C19, C31 | CGA2B3X7R1H104K050BB | TDK;MURATA;TDK                   | 0.1UF              | SMT CERAMIC CAPACITOR, 50V, X7R, 0402               |
|     2 | C7, C9                | GRM1555C1H331FA01    | MURATA                           | 330PF              | SMT CERAMIC CAPACITOR, 50V, 0402                    |
|     3 | C8, C11, C30          | UMK107BJ105KA        | TAIYO YUDEN;TDK;SAMSUNG;MURATA   | 1UF                | SMT CERAMIC CAPACITOR, 50V, X5R, 0603               |
|     2 | C12, C14              | GRM1555C1H6R0BA01    | MURATA                           | 6PF                | SMT CERAMIC CAPACITOR, 50V, 0402                    |
|     2 | C13, C15              | C1005C0G1H020B050    | TDK;MURATA                       | 2PF                | SMT CERAMIC CAPACITOR, 50V, 0402                    |
|     1 | C16                   | CGA2B1X7R1V224K050BE | TDK                              | 0.22UF             | SMT CERAMIC CAPACITOR, 35V, X7R, 0402               |
|     1 | C20                   | C1005X7R1H104K050BB  | TDK;MURATA;TDK;TAIYO YUDEN       | 0.1UF              | SMT CERAMIC CAPACITOR, 50V, X7R, 0402               |
|     1 | C21                   | GRM188Z71C475KE21    | MURATA                           | 4.7UF              | SMT CERAMIC CAPACITOR, 16V, X7R, 0603               |
|     1 | D1                    | B360B-13-F           | DIODES INCORPORATED              | B360B-13-F         | SMB, SCHOTTKY BARRIER DIODE, PIV=60V, Io=3A         |
|     1 | D2                    | APT1608LZGCK         | KINGBRIGHT                       | APT1608LZGCK       | SMT LED, GREEN, 0603                                |
|     1 | J1                    | KUSBX-SMT-AS1N-W30   | KYCON                            | KUSBX-SMT-AS1N-W30 | USB A-TYPE RECEPTACLE (FEMALE), RIGHT ANGLE         |
|     1 | J2                    | KUSBX-SMT2AP5S-W     | KYCON                            | KUSBX-SMT2AP5S-W   | USB A-TYPE PLUG (MALE), RIGHT ANGLE                 |
|     1 | JU1                   | PEC09SAAN            | SULLINS ELECTRONICS CORP         | PEC09SAAN          | HEADER, 100MIL SPACING, 9PINS                       |
|     1 | L1                    | 744311220            | WURTH ELECTRONICS INC.           | 2.2UH              | SMT INDUCTOR, SHIELDED                              |
|     1 | L2                    | 74279218             | WURTH ELECTRONICS INC.           | 600                | SMT FERRITE BEAD, 1206                              |
|     2 | L3, L5                | LQW15AN12NH00        | MURATA                           | 12NH               | SMT INDUCTOR, 0402                                  |
|     2 | L4, L6                | LQW15AN2N2C10        | MURATA                           | 2.2NH              | SMT INDUCTOR, 0402                                  |
|     1 | L7                    | BLM41PG600SN1        | MURATA                           | 60                 | SMT FERRITE BEAD, 1806                              |
|     1 | R1                    | WSLP1206R0500F       | VISHAY                           | 0.05               | SMT RESISTOR, 1206, 1%                              |
|     1 | R2                    | CRCW040212K1FK       | VISHAY DALE                      | 12.1K              | SMT RESISTOR, 0402, 1%                              |
|     5 | R3, R4, R9, R10, R42  | ERJ-2GE0R00          | PANASONIC                        | 0                  | SMT RESISTOR, 0402                                  |
|     2 | R7, R30               | RT0402BRB074K22L     | YAGEO PHICOMP                    | 4.22K              | SMT RESISTOR, 0402, 0.10%                           |
|     1 | R8                    | CR0402-16W-4641FT    | VENKEL LTD.                      | 4.64K              | SMT RESISTOR, 0402, 1%                              |
|     3 | R12, R40, R41         | RMCP0402FT100K       | STACKPOLE ELECTRONICS INC.       | 100K               | SMT RESISTOR, 0402, 1%                              |
|     2 | R13, R14              | CRCW0402499KFK       | VISHAY DALE                      | 499K               | SMT RESISTOR, 0402, 1%                              |
|     1 | R20                   | ERJ-2RKF5102         | PANASONIC                        | 51K                | SMT RESISTOR, 0402, 1%                              |
|     2 | R21, R22              | RC0603FR-070RL       | YAGEO                            | 0                  | SMT RESISTOR, 0603, 1%                              |
|     2 | SW1, SW2              | TDA02H0SB1           | C&K COMPONENTS                   | TDA02H0SB1         | ULTRA-MINIATURE SURFACE MOUNT DIP SWITCH            |
|     1 | U1                    | MAX16984RACIL/V+     | MAXIM                            | MAX16984RACIL/V+   | AUTOMOTIVE BUCK CONVERTER WITH USB CHARGE DETECTION |
|     1 | U2                    | MAX15007AATT+        | MAXIM                            | MAX15007AATT+      | AUTOMOTIVE LINEAR REGULATOR                         |

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

## MAX16984L Evaluation Kit

## MAX16984L EV Kit Schematic

<!-- image -->

## MAX16984L Evaluation Kit

## MAX16984L EV Kit Schematic (continued)

<!-- image -->

## MAX16984L Evaluation Kit

## MAX16984L EV Kit PCB Layout Diagrams

MAX16984L EV Kit PCB Layout-Silk Top

<!-- image -->

MAX16984L EV Kit PCB Layout-Top

<!-- image -->

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)

MAX16984L EV Kit PCB Layout-Layer1

<!-- image -->

MAX16984L EV Kit PCB Layout-Layer2

<!-- image -->

## MAX16984L Evaluation Kit

## MAX16984L EV Kit PCB Layout Diagrams (continued)

MAX16984L EV Kit PCB Layout-Bottom

<!-- image -->

MAX16984L EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAX16984L Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 10/21           | Initial release                    | -               |
|                 1 | 11/21           | Updated Ordering Information table | 7               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates: MAX16984 (MAX16984R/ MAX16984S in CQFN package)