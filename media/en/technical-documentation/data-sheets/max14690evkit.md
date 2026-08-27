<!-- lastmod 2022-08-03 -->
## MAX14690 Evaluation Kit

## General Description

The MAX14690 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX14690 wearable charge-management solution with I 2 C capability for lowpower wearable application. The device includes a linear battery  charger,  Smart  Power  Selector™,  two  ultra-low quiescent current buck regulators, and three low-dropout (LDO) linear regulators.

Refer to the MAX14690 IC data sheet for detailed information regarding the operation and features of the devices.

## Features

- RoHS Compliant
- Proven PCB Layout
- Full Assembled and Tested
- I 2 C Serial Interface

## Quick Start

## Required Equipment

- ● Adjustable power supply with 0V to 5V capability
- ● Digital multimeter (DMM)
- ● I 2 C controller device
- ● GPIO controller device
- ● Cables with grabber connections

## Optional Equipment

- ● Second power supply for LDOs

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify basic board operation.

Caution: Do not turn on the power supply and external devices until all connections are completed.

- 1) Connect PFN1 (J2 pin 11) to the GPIO controller output. Alternatively, PFN1 can be connected to a 3V IO supply through a 10k pullup resistor. This procedure assumes that a GPIO controller is used.

Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX14690

- 2) Connect the I 2 C Controller device to GND, SDA (J1 pin 6), and SCL (J1 pin 7).
- 3) Set the power supply voltage to 3.7V and turn off the supply.
- 4) Connect the positive terminal of the 3.7V power supply to BAT (J1 pin 4) and the negative terminal to GND (J3 pin 1).
- 5) Turn on the 3.7V power supply.
- 6) Turn on the GPIO controller device and I 2 C controller device.
- 7) Set GPIO controller to output logic-high to PFN1 to power on the MAX14690.
- 8) Measure the voltage on SYS (J1 pin 3) and confirm that it equals the battery voltage.
- 9) To enable the Buck1 output, use the I 2 C controller to set Buck1En[1:0] to '01' by writing value '0xE8' to register 0x0D. Measure B1OUT (J2 pin 6) and confirms that it equals 1.8V.
- 10) To enable Buck2 output, use the I 2 C controller to set Buck2En[1:0] to '01' by writing value '0xE8' to register 0x0F. Measure B2OUT (J2 pin 5) and confirm that it equals 3.3V.
- 11) Optional: To test any one of the LDOs, set the second power supply voltage to the desired LDO input voltage. Turn it off and then connect the positive terminal to the LDO input and the negative terminal to GND. Turn it on. To enable the LDO output, use the I 2 C controller to write value '0xE2' to the register LDO1Cfg, LDO2Cfg, or LDO3Cfg corresponding to the LDO under test. Measure the voltage of the LDO output and confirm that it matches the default setting: 0.8V (LDO1), 0.8V (LDO2), and 0.8V (LDO3).
- 12) The EV kit is ready for additional evaluation.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14690 Evaluation Kit

## Detailed Description of Hardware

The  MAX14690  evaluation  kit  (EV  Kit)  evaluates  the MAX14690 wearable charge-management solution.

See Table 1 through Table 3 for pin descriptions  of  the three connectors (J1-J3).

## Table 1. Connector J1

|   PIN | MAX14690   | DESCRIPTION                             |
|-------|------------|-----------------------------------------|
|     1 | GND        | Ground                                  |
|     2 | MON        | Voltage Monitor Output                  |
|     3 | N.C.       | Not Connected                           |
|     4 | INT        | Open-Drain, Active-Low Interrupt Output |
|     5 | RST        | Power-On Reset Output.                  |
|     6 | SDA        | I 2 C Serial Data Input/Output          |
|     7 | SCL        | I 2 C Serial Clock Input                |
|     8 | MPC1       | Multipurpose Configuration Input 1      |
|     9 | MPC0       | Multipurpose Configuration Input 0      |
|    10 | PFN2       | Power Function Control Input/Output     |
|    11 | PFN1       | Power Function Control Input            |
|    12 | GND        | Ground                                  |

## Table 2. Connector J2

|   PIN | SIGNAL   | DESCRIPTION             |
|-------|----------|-------------------------|
|     1 | L3IN     | LDO3 Input              |
|     2 | L3OUT    | LDO3 Output             |
|     3 | L2OUT    | LDO2 Output             |
|     4 | L1OUT    | LDO1 Output             |
|     5 | B2OUT    | Buck Regulator 2 Output |
|     6 | B1OUT    | Buck Regulator 1 Output |
|     7 | L2IN     | LDO2 Input              |
|     8 | L1IN     | LDO1 Input              |

Evaluates: MAX14690

## Table 3. Connector J3

|   PIN | SIGNAL   | DESCRIPTION                                                         |
|-------|----------|---------------------------------------------------------------------|
|     1 | GND      | Ground                                                              |
|     2 | CHRGIN   | Charger Input                                                       |
|     3 | SYS      | System Load Connection                                              |
|     4 | BAT      | Battery                                                             |
|     5 | THM      | Battery Temperature Thermistor Connection                           |
|     6 | CAP      | Bypass for Internal LDO                                             |
|     7 | SET      | External Resistor Connection for Configuring Battery Charge Current |
|     8 | LED      | LED Current Sink Input                                              |
|     9 | N.C.     | Not Connected                                                       |
|    10 | N.C.     | Not Connected                                                       |
|    11 | N.C.     | Not Connected                                                       |
|    12 | GND      | Ground                                                              |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14690EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

│

## MAX14690 EV Kit Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                     | MANUFACTURER               | VALUE          |
|--------|-----------|-----------|-------|--------------------------------|----------------------------|----------------|
| 1      | C1-C9     | -         |     9 | C1005X5R1V225M050BC            | TDK                        | 2.2UF          |
| 2      | C10-C12   | -         |     3 | C1608X5R0J226M080AC            | TDK                        | 22UF           |
| 3      | J1, J3    | -         |     2 | PBC12SAAN                      | SULLINS ELECTRONICS CORP.  | PBC12SAAN      |
| 4      | J2        | -         |     1 | PBC08SAAN                      | SULLINS ELECTRONICS CORP.  | PBC08SAAN      |
| 5      | L1, L2    | -         |     2 | DFE201610E-2R2M                | TOKO                       | 2.2UH          |
| 6      | R3        | -         |     1 | ERA-2AED221                    | PANASONIC                  | 220            |
| 7      | U1        | -         |     1 | MAX14690BEWX+                  | MAXIM                      | MAX14690BEWX+  |
| 8      | Q1        | DNP       |     0 | SI8439DB-T1-E1                 | N/A                        | SI8439DB-T1-E1 |
| 9      | R1        | DNP       |     0 | RG1005P-102-D                  | SUSUMU CO LTD.             | 1K             |
| 10     | R2        | DNP       |     0 | CRCW040210K0FK; RC0402FR-0710K | VISHAY DALE; YAGEO PHICOMP | 10K            |
| 11     | PCB       | -         |     1 | MAX                            | MAXIM                      | PCB            |
| TOTAL  | TOTAL     |           |    20 |                                |                            |                |

## MAX14690 EV Kit Schematic

<!-- image -->

│

## MAX14690 EV Kit PCB Layout Diagrams

MAX14690 EV Kit-Top Silkscreen

<!-- image -->

MAX14690 EV Kit-Top

<!-- image -->

MAX14690 EV Kit-Layer 2

<!-- image -->

│

## MAX14690 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14690 EV Kit-Layer 3

MAX14690 EV Kit-Bottom Silkscreen

<!-- image -->

MAX14690 EV Kit-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 12/16           | Initial release           | -               |
|                 1 | 2/19            | Added Quick Start section | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX14690