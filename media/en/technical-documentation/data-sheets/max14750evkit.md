<!-- lastmod 2022-08-03 -->
## MAX14750 Evaluation Kit

## General Description

The MAX14750 evaluation kit (EV kit) is a fully assembled  and  tested  circuit  for  evaluating  the  MAX14720/ MAX14750 power-management solutions with I 2 C capability  for  space-constrained,  battery-powered  applications.  Both  the  MAX14720  and  MAX14750  integrate  a synchronous  buck  converter,  a  buck-boost  converter,  a linear regulator, and a power switch. The MAX14750 provides individual pin enables for each function, while the MAX14720 includes a push-button monitor and sequencing controller.  Refer to the MAX14720/MAX14750 IC data sheet for detailed information regarding the operation and features of the devices.

The EV kit comes standard with the MAX14750A installed, but can also be used to evaluate the MAX14720 by replacing the MAX14750A (U1) with the MAX14720. Request a free sample of the MAX14720 when ordering the EV kit.

## Features

- ● RoHS Compliant
- ● Proven PCB Layout
- ● Full Assembled and Tested
- ● I 2 C Serial Interface

## Quick Start

## Required Equipment

- ● GPIO controller device with four (4)  IO pins
- ● Two (2) adjustable power supplies with 0-5V capability
- ● Digital multimeter (DMM)
- ● I 2 C controller device
- ● Cables with crabber connections

## Optional Equipment

- ● Electronic load
- ● 0402 (imperial) 0Ω resistors

Evaluates: MAX14720/MAX14750

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify basic board operation:

Caution: Do not turn on the power supply and external devices until all connections are made.

- 1) Connect the pins of the GPIO controller device to LEN (J1 pin 8), BEN (J1 pin 9), HVEN (J1 pin 10), and SWEN (J1 pin 11). Set the outputs to low.
- 2) Connect the I 2 C master device to GND, SDA (J1 pin 6) and SCL (J1 pin 7).
- 3) Set one power supply voltage to 3.7V and turn off the supply.
- 4) Connect the positive terminal of the 3.7V to V CC  (J3 pin 4) and the negative terminal to GND (J3 pin 1 and 12, J1 pin 1 and 12).
- 5) Turn on the 3.7V power supply.
- 6) Turn on the GPIO controller device and the I 2 C master device.
- 7) Set the second power supply voltage to the desired input voltage of the regulator or load switch to be tested and turn off the supply.
8. Optional: Install 0Ω resistors in the R4-9 positions as desired to connect the regulator and load switch inputs to V CC  or the switch output.
- 8) Connect the positive terminal of the regulator input supply to the regulator or load switch input and the negative terminal to GND.
- 9) Turn on the regulator or load switch input supply
- 10)  Use the I 2 C master to configure the EV kit regulator(s) to be tested, if applicable.
- 11)  Enable the regulator or load switch by setting the corresponding enable pin high using the GPIO controller device.
- 12)  Measure the voltage of the regulator or load switch output and confirm it matches the programmed set -tings.

Optional: To test the regulator under load, connect the electronic load to the output pin and apply the desired load

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14750 Evaluation Kit

## Detailed Description of Hardware

The  MAX14750  evaluation  kit  (EV  Kit)  evaluates  the MAX14720/MAX14750  compact  power  management solutions.

See Table 1 through Table 3 for pin descriptions  of  the three connectors J1-J3.

Table 1. Connector J1

|   PIN | MAX14720   | MAX14750   | DESCRIPTION                                                            |
|-------|------------|------------|------------------------------------------------------------------------|
|     1 | GND        | GND        | Ground                                                                 |
|     2 | MON        | MON        | Monitor Multiplexer Output                                             |
|     3 | N.C.       | N.C.       | Not Connected                                                          |
|     4 | N.C.       | N.C.       | Not Connected                                                          |
|     5 | RST        | N.C.       | (MAX14720) Reset Output. (MAX14750) Not Connected                      |
|     6 | SDA        | SDA        | I 2 C Serial Data Input/Output                                         |
|     7 | SCL        | SCL        | I 2 C Serial Clock Input                                               |
|     8 | N.C.       | LEN        | (MAX14720) Not Connected (MAX14750) Linear Regulator Enable Input      |
|     9 | MPC        | BEN        | (MAX14720) Multipurpose Control Input (MAX14750) Buck Regulator Enable |
|    10 | KOUT       | HVEN       | (MAX14720) KEY Output (MAX14750) Buck-Boost Regulator Enable Input     |
|    11 | KIN        | SWEN       | (MAX14720) KEY Input (MAX14750) Power Switch Enable Input              |
|    12 | GND        | GND        | Ground                                                                 |

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.murata.com        |
| TDK Corp        | www.component.tdk.com |
| Bourns          | www.bourns.com        |

Note: Indicate that you are using the MAX14750 when contacting these component suppliers.

Evaluates: MAX14720/MAX14750

## Hardware Modification

Resistors R1 and R4-R9 are uninstalled by default. V CC can be used to power the inputs of the four major blocks (LIN, BIN, HVIN, and SWIN) by populating R1, R5, R7, and R9 accordingly. The blocks can also be cascaded in any order by selectively populating R4, R6, R7, and R9.

The  EV  kit  hardware  is  configured  by  default  for  the evaluation of the MAX14750. To evaluate the MAX14720, remove R2 and install a short at R3.

## Table 2. Connector J2

|   PIN | SIGNAL   | DESCRIPTION                                            |
|-------|----------|--------------------------------------------------------|
|     1 | LIN      | LDO Input                                              |
|     2 | BIN      | Buck Regulator Input                                   |
|     3 | HVIN     | Buck-Boost Regulator Input (Must be connected to HVIN) |
|     4 | SWIN     | Power Switch Input                                     |
|     5 | LOUT     | LDO Output                                             |
|     6 | BOUT     | Buck Regulator Output                                  |
|     7 | HVOUT    | Buck-Boost Regulator Output                            |
|     8 | SWOUT    | Power Switch Output                                    |

## Table 3. Connector J3

|   PIN | SIGNAL   | DESCRIPTION               |
|-------|----------|---------------------------|
|     1 | GND      | Ground                    |
|     2 | N.C.     | Not Connected             |
|     3 | N.C.     | Not Connected             |
|     4 | VCC      | Chip Power Input          |
|     5 | N.C.     | Not Connected             |
|     6 | CAP      | Internal Power Decoupling |
|     7 | N.C.     | Not Connected             |
|     8 | N.C.     | Not Connected             |
|     9 | N.C.     | Not Connected             |
|    10 | N.C.     | Not Connected             |
|    11 | N.C.     | Not Connected             |
|    12 | GND      | Ground                    |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14750EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX14750 EV Kit Bill of Materials

|   ITEM | REF_DES       | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                         | VALUE         | DESCRIPTION                                                                                                       | COMMENTS   |
|--------|---------------|-----------|-------|------------------------------------------------|--------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1-C3, C11    | -         |     4 | C1608X5R0J226M080AC                            | TDK                                  | 22µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 22µF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55°C TO +85°C; TC=X5R               |            |
|      2 | C4, C5, C8    | -         |     3 | C1005X5R1A475M050BC                            | TDK                                  | 4.7µF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL=20%; MODEL=C SERIES; TG=-55°C TO +85°C; TC=X5R               |            |
|      3 | C6, C7        | -         |     2 | C1005X5R1H104K050                              | TDK                                  | 0.1µF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL=10%; MODEL=C SERIES; TG=-55°C TO +85°C; TC=X5R;              |            |
|      4 | C9            | -         |     1 | C3216X5R1A107M                                 | TDK                                  | 100µF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 100µF; 10V; TOL=20%; MODEL=C SERIES; TG=-55°C TO +85°C; TC=X5R               |            |
|      5 | J1, J3        | -         |     2 | 90120-0772                                     | MOLEX                                | 90120-0772    | CONNECTOR; THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; GOLD PLATED CONTACT; STRAIGHT THROUGH; 12PINS |            |
|      6 | J2            | -         |     1 | 90120-0768                                     | MOLEX                                | 90120-0768    | CONNECTOR; THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; GOLD PLATED CONTACT; STRAIGHT THROUGH; 8PINS  |            |
|      7 | L1            | -         |     1 | VLS201610ET-4R7M                               | TDK                                  | 4.7µH         | INDUCTOR; SMT; WIREWOUND CHIP; 4.7µH; TOL=±20%; 0.72A                                                             |            |
|      8 | L2            | -         |     1 | SRP2010-2R2M                                   | BOURNS                               | 2.2µH         | INDUCTOR; SMT; POWDERED IRON CORE; 2.2µH; TOL=±20%; 1.7A                                                          |            |
|      9 | R10, R11      | -         |     2 | CRCW040210K0FK; RC0402FR-0710K                 | VISHAY DALE; YAGEO PHICOMP           | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                              |            |
|     10 | R1, R3, R4-R9 | DNP       |     0 | N/A                                            | N/A                                  | OPEN          | PACKAGE OUTLINE 0402 RESISTOR                                                                                     |            |
|     11 | R2            | -         |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH |               | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                            |            |
|     12 | U1            | -         |     1 | MAX14750AEWA+                                  | MAXIM                                | MAX14750AEWA+ | IC; MAX14750A; 25 WLP; PACKAGE CODE W252M2+1; 21-0788                                                             |            |
|     13 | PCB           | -         |     1 | MAX14720                                       | MAXIM                                | PCB           | PCB Board:MAX14720 EVALUATION KIT                                                                                 |            |

## MAX14750 EV Kit Schematic

<!-- image -->

│

## MAX14750 EV Kit PCB Layout

<!-- image -->

MAX14720/MAX14750 EV-Top Silkscreen

MAX14720/MAX14750 EV-Top

<!-- image -->

MAX14720/MAX14750 EV-Internal 2

<!-- image -->

│

## MAX14750 EV Kit PCB Layout (continued)

<!-- image -->

MAX14720/MAX14750 EV-Internal 3

MAX14720/MAX14750 EV-Bottom

<!-- image -->

MAX14720/MAX14750 EV-Bottom Silkscreen

<!-- image -->

│

## MAX14750 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 10/16           | Initial release           | -               |
|                 1 | 2/19            | Added Quick Start section | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX14720/MAX14750