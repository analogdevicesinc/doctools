<!-- lastmod 2022-08-04 -->
## MAX20006/MAX20008 Evaluation Kits

## General Description

Evaluate s

: MAX20004/MAX20006/MAX20008

## Quick Start

The  MAX20006/MAX20008  evaluation  kits  (EV  kits) demonstrate the MAX20004/MAX20006/MAX20008 highvoltage,  current-mode,  synchronous  step-down  converters with low operating current. The EV kits operate over a wide 3.5V to 36V input range. The output is set for 5V in the default configuration but can be adjusted between 1V and 10V with appropriate components. The MAX20004/ MAX20006/MAX20008  current  limit  supports  a  nominal output current of 4A/6A/8A, respectively.

The EV kit switching frequency is set for either 2.2MHz (MAX20006EVKIT) or 400kHz (MAX20008EVKIT) in the default configuration. The switching frequency is resistor programmable between 220kHz and 2.2MHz and can be synchronized to an external signal.  The EV kits can be set  for  fixed-frequency  (PWM  mode)  or  pulse-skipping (SKIP mode) for light load efficiency through the provided on-board jumper.

## Features

- Operating VIN Range of 3.5V to 36V
- 25µA No Load Quiescent Current in SKIP Mode
- High-Efficiency Synchronous DC-DC Converter with Integrated FETs
- 220kHz to 2.2MHz Adjustable Frequency
- External Frequency Synchronization (SYNC) Input
- Internal Soft-Start
- Fixed 3.3V/5.0V Output or Resistor Programmable 1V to 10V Output
- Low Dropout (98% Effective Duty Cycle Operation)
- ±2% Output Voltage Accuracy
- RESET Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Required Equipment

- MAX20006/MAX20008 EV kit
- 14V, 4A DC power supply
- Electronic load capable of 8A
- Digital voltmeter (DVM)

## Procedure

Each  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on supplies until all connections are made.

- 1) Verify that jumpers JU1-JU2 are in their default posi -tions, as shown in Table 1 .
- 2) Connect the 14V power supply between the VIN and nearest GND input terminals on the EV kit.
- 3) Connect the electronic load between the VOUT and nearest GND output terminals on the EV kit and set for 6A (MAX20006EVKIT) or 8A (MAX20008EVKIT).
- 4) Connect  the  DVM  between  the  VOUT  and  nearest GND output terminals on the EV kit.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at VOUT is approximately 5V.

<!-- image -->

## MAX20006/MAX20008 Evaluation Kits

## Evaluate s : MAX20004/MAX20006/MAX20008

## Detailed Description of Hardware

The MAX20006/MAX20008 EV kits come fully assembled and  tested.  The  MAX20006EVKIT  is  populated  with the  MAX20006AFOA/VY+, and the  MAX20008EVKIT is populated with the MAX20008AFOA/VY+. Other converters in the family can be tested on the same EV kit;  however, changing the IC or the output voltage may also require changing other components. Consult the IC data sheet for guidance on selecting the proper ICs and external components.

## Enable (EN)

Place a shunt in the 2-3 position on jumper JU1 to enable the IC for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-1 position.

## Synchronization and Switching

The  IC  has  the  ability  to  operate  in  either  forcedPWM mode or in SKIP mode. Place a shunt in the 2-1 position  on  JU2  to  select  forced-PWM  mode  at  the resistor-programmed frequency. Removing the shunt from JU2 or placing a shunt in the 2-3 position on jumper JU2 causes the IC to enter SKIP mode for maximum light load efficiency. With a shunt in the 2-3 position on jumper JU2,

## Table 1. Enable Control (JU1)

| SHUNT POSITION   | EN PIN          | VOUT     |
|------------------|-----------------|----------|
| 2-3*             | EN tied to VSUP | Enabled  |
| 2-1              | EN tied to GND  | Disabled |

*Default configuration.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20006EVKIT# | EV Kit |
| MAX20008EVKIT# | EV Kit |

#Denotes RoHS compliant.

the switching frequency can be synchronized to an appro -priate external signal applied to the SYNC input terminal.

## Setting the Switching Frequency (FOSC)

The IC switching frequency is set by a resistor connected from  FOSC  to  AGND.  Refer  to  the  IC  data  sheet  for selecting the resistor value.

## RESET Output

The EV kit provides a RESET output to monitor the status of the device output. The RESET output is an open-drain output  from  the  IC  with  an  external  pullup  resistor  to VOUT on the EV kits. Refer to the IC data sheet for details on the RESET functionality.

## Output Voltage Setting

Populating R9 with a 0Ω jumper connects FB to BIAS for a fixed +5V (EV kit default output) or a fixed +3.3V output voltage depending on the IC version. To set the output to other voltages between 1V and 10V, remove R9, populate R1 with a 0Ω jumper, and populate R7/R8/C14 with the appropriate values. Other component modifications might also be required. Refer to the IC data sheet for details on setting the output voltage.

## Table 2. Operating Mode Control (JU2)

| SHUNT POSITION   | SYNC PIN                   | MODE                  |
|------------------|----------------------------|-----------------------|
| 2-1*             | SYNC tied to BIAS          | Forced PWM            |
| 2-3              | SYNC pulled to GND with R2 | SKIP or external SYNC |

*Default configuration.

│

## MAX20006/MAX20008 Evaluation Kits

Evaluate s

: MAX20004/MAX20006/MAX20008

## MAX20006/MAX20008 EV Kit Bill of Materials

Revison:  B

Date:  02/20/2017

## Parts Common to All Variants

| REFERENCE                    |   QTY | DESCRIPTION                                      | MANUFACTURER    | PART#                |
|------------------------------|-------|--------------------------------------------------|-----------------|----------------------|
| C1                           |     1 | CAP CER 0.1UF 50V X7R 0402                       | TDK             | CGA2B3X7R1H104K050BB |
| C2                           |     1 | CAP CER 10UF 35V X7R 1206                        | TDK             | C3216X7R1V106K160AC  |
| C3                           |     1 | CAP ALUM 100UF 20% 35V SMD                       | PANASONIC       | EEEFP1V101AP         |
| C4,C5,C7                     |     3 | CAP CER 0.1UF 100V X7R 0603                      | MURATA          | GRJ188R72A104KE11D   |
| C8                           |     1 | CAP CER 2.2UF 10V X7R 0603                       | TDK             | C1608X7R1A225K080AC  |
| C9                           |     1 | CAP CER 1000PF 100V X7R 0603                     | TDK             | C1608C0G2A102J080AA  |
| C10,C11                      |     2 | CAP CER 47UF 10V X7R 1210                        | MURATA          | GRM32ER71A476ME15L   |
| C13                          |     0 | Not Installed                                    |                 |                      |
| C14                          |     0 | Not Installed                                    |                 |                      |
| FB1                          |     1 | FERRITE CHIP 60 OHM6A1806                        | MURATA          | BLM41PG600SH1L       |
| J1,J2                        |     2 | 3 PIN HEADER 0.100" 40POS CUT TO FIT             | TE CONNECTIVITY | 4-103327-0           |
| R1                           |     0 | Not Installed                                    |                 |                      |
| R2,R6                        |     2 | RES SMD 100K OHM1%1/10W 0603                     | PANASONIC       | ERJ-3EKF1003V        |
| R5,R9                        |     2 | RES SMD 0 OHMJUMPER 1/10W 0603                   | PANASONIC       | ERJ-3GEY0R00V        |
| R7                           |     0 | Not Installed                                    |                 |                      |
| R8                           |     0 | Not Installed                                    |                 |                      |
| GND,VIN,SYNC,RESET,VOU T,GND |     6 | WIRE LOOP 18AWG SOLID BARE WIRE TINNED           |                 |                      |
| GND,VIN,VOUT,GND             |     4 | BANANA JACK UNINSULATED THREADED EXTERNAL NUT    | POMONA          | 3267                 |
|                              |     1 | PCB, MAX20004/6/8 EV Kit                         |                 |                      |
|                              |     2 | 2 POSITION SHUNT CONNECTOR BLACK OPEN TOP 0.100" | KYCON           | SX1100-B             |
|                              |     1 | LABEL                                            |                 | 85-84003-006         |
|                              |     1 | WEB instructions for Maxim Data Sheet            |                 | EVINSERT             |
|                              |     1 | BAG, STATIC SHIELD ZIP 5'x6', W/ ESD LOGO        |                 | 87-02162-000         |
|                              |     1 | FOAM, ANTI-STATIC PE 12'x12'X5MM                 |                 | 85-MAXKIT-PNK        |
|                              |     1 | BOX, BROWN 9 3/16' x 7' x 7/8'                   |                 |                      |

## MAX20006EVKIT# Variant (5V 2.2MHz)

| C6   |   1 | CAP CER 3.9PF 100V C0G 0603     | MURATA    | GRM1885C2A3R9CZ01D   |
|------|-----|---------------------------------|-----------|----------------------|
| C12  |   0 | Not Installed                   |           |                      |
| L1   |   1 | INDUCTOR 1UH                    | COILCRAFT | XAL6030-102ME        |
| R3   |   1 | RES SMD 12K OHM1%1/10W 0603     | PANASONIC | ERJ-3EKF1202V        |
| R4   |   1 | RES SMD 39K OHM1%1/10W 0603     | PANASONIC | ERJ-3EKF3902V        |
| U1   |   1 | IC STEP DOWNCONVERTER 17L-FCQFN | MAXIM     | MAX20006AFOA/VY+     |

## MAX20008EVKIT# Variant (5V 400kHz)

| C6   |   1 | CAP CER 27PF 100V C0G 0603      | MURATA    | GRM1885C2A270JA01D   |
|------|-----|---------------------------------|-----------|----------------------|
| C12  |   1 | CAP CER 47UF 10V X7R 1210       | MURATA    | GRM32ER71A476ME15L   |
| L1   |   1 | INDUCTOR 4.7UH                  | COILCRAFT | XAL6060-472ME        |
| R3   |   1 | RES SMD 73.2K OHM1%1/10W 0603   | PANASONIC | ERJ-3EKF7322V        |
| R4   |   1 | RES SMD 30K OHM1%1/10W 0604     | PANASONIC | ERJ-3EKF3002V        |
| U1   |   1 | IC STEP DOWNCONVERTER 17L-FCQFN | MAXIM     | MAX20008AFOA/VY+     |

│

## MAX20006/MAX20008 EV Kit Schematic

<!-- image -->

│

Evaluate s

: MAX20004/MAX20006/MAX20008

## MAX20006/MAX20008 EV Kit PCB Layouts

MAX20006/MAX20008 EV Kit PCB Layout-Top Layer

<!-- image -->

│

Evaluate s

: MAX20004/MAX20006/MAX20008

## MAX20006/MAX20008 EV Kit PCB Layouts (continued)

MAX20006/MAX20008 EV Kit PCB Layout-Layer 1

<!-- image -->

│

Evaluate s

: MAX20004/MAX20006/MAX20008

## MAX20006/MAX20008 EV Kit PCB Layouts (continued)

MAX20006/MAX20008 EV Kit PCB Layout-Layer 2

<!-- image -->

│

Evaluate s

: MAX20004/MAX20006/MAX20008

## MAX20006/MAX20008 EV Kit PCB Layouts (continued)

MAX20006/MAX20008 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX20006/MAX20008 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate s

: MAX20004/MAX20006/MAX20008