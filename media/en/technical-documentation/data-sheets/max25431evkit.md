<!-- lastmod 2022-08-02 -->
## MAX25431 Evaluation Kit

## General Description

The MAX25431 evaluation kit (EV kit) is a fully assembled and tested application circuit for the MAX25431 currentmode buck-boost controller IC. The EV kit is designed to deliver up to 16A (max) input current with input voltages from 6V to 36V. The voltage quality can be monitored by observing the PGOOD signal.

The  IC  offers  a  3V  to  25V  OUT  programmable  range. Switching frequency is adjustable from 220kHz to 2.2MHz, which  allows  for  small  external  components,  reduced output  ripple,  and  guarantees  no  AM  interference.  The IC comes with a spread-spectrum frequency-modulation option designed to minimize EMI-radiated emissions and a  SYNCOUT  function  that  outputs  180°  out-of-phase clock.

## Features

- 6V to 36V Input Supply Range
- Delivers Up to 16A Input Current
- Enable Input
- Frequency Synchronization Output
- Voltage-Monitoring PGOOD Output
- BIAS Voltage-Monitoring Test Point
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

Evaluates: MAX25431

## Quick Start

## Required Equipment

- MAX25431 EV kit
- 6V to 36V, 20A power supply
- Voltmeter
- Electronic load

## Procedure

The MAX25431 EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to IN and GND test pads, respectively.
- 3) Set the power-supply voltage to 14V and 10A current limit.
- 4) Connect the positive terminal of the voltmeter to OUT and the negative terminal to GND2.
- 5) Turn on the power supply.
- 6) Verify that OUT is approximately 12V.

## Additional Evaluation

- 7) Connect the positive terminal of the electronic load to OUT and the negative terminal to GND2.
- 8) Set the electronic load to 2A and turn on the load.
- 9) Verify output voltage on the voltmeter is 12V ±2%.
- 10)  With the load still on, slowly reduce the input voltage from 14V to 8V. Verify output voltage on the voltmeter is 12V ±2%.

<!-- image -->

## Detailed Description of Hardware

The MAX25431 EV kit provides a proven layout for the MAX25431 buck-boost controller IC. The IC accepts input voltage as high as 36V and can deliver high-load currents, with a 20A (max) input current in boost mode. The EV kit can handle an input-supply transient up to 40V. Various test points are included for evaluation. The EV kit comes installed with a 3mΩ current-sense resistor on the input (R1) and a 4mΩ sense resistor on the output (R2). This sets  the  input  current  limit  to  16.67A  and  the  runaway current limit to 18.75A. A higher current limit can be set by  changing  the  sense  resistors. An  optional  filter  input (IN\_FILTER) is provided to test designs with an additional input filter. The default EV kit comes with no filter installed, so input terminal IN must be used.

## External Synchronization

The  IC  operates  in  fixed-PWM  (FPWM)  with  spread spectrum enabled. The EV kit comes without the shunt installed on jumper, J3. The center pin of J3 can be used to synchronize to an external clock.

When evaluating the MAX25431ATGB on this EV kit, the SYNCOUT signal can be measured on the center pin of J3. The SKIP and FPWM silkscreen is used when evaluating other Maxim Integrated Buck-Boost controllers.

## Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is an open-drain output and is high impedance when the output voltage is in regulation. PGOOD is low impedance  when  the  output  voltage  drops  below  92% (typ)  of  its  nominal  regulated  voltage.  To  obtain  a  logic

## Table 1. Default Jumper Settings

| JUMPER        | DEFAULT SHUNT POSITION   | FUNCTIONS                                                                                                                            |
|---------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| J1 (EN)       | ON-Middle                | Buck-Boost enabled                                                                                                                   |
| J4 (PGOOD PU) | Installed                | PGOOD pulls up to VBIAS when OUT is in regulation                                                                                    |
| J3 (SYNC)     | Not Installed            | MAX25431ATGA (Default): Apply the external clock input on center pin. MAX25431ATGB: The SYNCOUT signal can be measured on center pin |

## Ordering Information

| PART           | TYPE                     |
|----------------|--------------------------|
| MAX25431EVKIT# | 12V Output/420kHz EV kit |

# Denotes RoHS-compliance.

Evaluates: MAX25431

signal, pull up PGOOD to BIAS by installing a shunt on the PGOOD jumper.

## Evaluating Other Voltages

The  EV  kit  comes  installed  with  the  MAX25431ATGA/ VY+ and is configured for 12V OUT at a 420kHz switching frequency set for 16A (max) input current in boost mode. For  evaluating  other  configurations,  refer  to  the Design Example table in the MAX25431 IC data sheet. Other IC options for spread spectrum/SYNCOUT can be installed as well.

## EMC Performance

EV  kit  provides  a  proven  layout  that  is  compliant  with CISPR-25 requirements for EMC testing. The default EV kit (12V OUT , 420kHz configuration) requires no additional filtering  to  meet  the  CISPR-25  EMC  standards.  The  IC also comes with the spread-spectrum option, which can be ordered to improve EMC performance.

## Specifications Summary

- VIN  (min): 6V
- VIN  (max): 36V
- V OUT : 12V
- f SW: 420kHz
- I OUT (max): 5A
- Input Current: 16.67A peak current
- Runaway Current: 18.75A peak current
- SPS: On
- FSYNC: SYNCIN

│

## MAX25431 EV Kit Bill of Materials

| REF DES                             | MFG PART #           | MANUFACTURER         | DESCRIPTION                                                                                                 |
|-------------------------------------|----------------------|----------------------|-------------------------------------------------------------------------------------------------------------|
| C1, C2, C3                          | CGA6P3X7S1H106M      | TDK                  | CAP CER 10UF 50V X7S 1210                                                                                   |
| C4                                  | EEH-ZE1H680P         | Panasonic            | CAP ALUM POLY 68UF 20% 50V SMD                                                                              |
| C5, C6, C17                         | CGA2B3X7R1H104M050BB | TDK                  | CAP CER 0.1UF 50V X7R 0402                                                                                  |
| C7                                  | CGA4J1X7R1V475K125AE | TDK                  | CAP CER 4.7UF 35V X7R 0805                                                                                  |
| C8                                  | CGA2B2X7R1E103K050BA | TDK                  | CAP CER 10000PF 25V X7R 0402                                                                                |
| C9                                  | CGA1A2X7R1H101K030BA | TDK                  | CAP CER 100PF 50V X7R 0201                                                                                  |
| L2                                  | -                    | -                    | Do Not Install                                                                                              |
| C10, C11, C15                       | CKG57NX7R1E107M500JH | TDK                  | CAP CER 100uF, 25V, 2220, X7R                                                                               |
| C12, C13, C14                       | CGA3E3X7R1H474K080AE | TDK                  | CAP CER 0.47UF 50V X7R 0603                                                                                 |
| C16                                 | CGA4J1X7R1V225M125AC | TDK                  | CAP CER 2.2UF 35V X7R 0805                                                                                  |
| C18, C19                            | -                    | -                    | Do Not Install                                                                                              |
| D1                                  | BAT54AWFILMY         | ST Microelectronics  | DIODE ARRAY SCHOTTKY 40V SOT323                                                                             |
| L1                                  | XAL1060-222E         | Coilcraft            | Inductor, 2.2uH                                                                                             |
| R1                                  | PMR18EZPFV3L00       | ROHM                 | RES 0.003 OHM1%1W1206                                                                                       |
| R2                                  | PMR18EZPFV4L00       | ROHM                 | RES 0.004 OHM1%1W1206                                                                                       |
| R3                                  | CRCW040247K0JNED     | Vishay Dale          | RES SMD 47K OHM5%1/16W 0402                                                                                 |
| R5                                  | CRCW040273K2FKED     | Vishay Dale          | RES SMD 73.2K OHM1%1/16W 0402                                                                               |
| R6, R10                             | ERA-2AEB103X         | Panasonic            | RES SMD 10K OHM0.1% 1/16W 0402                                                                              |
| R11, R14, R15, R16                  | CRCW04022R00JN       | Vishay Dale          | RES SMD 2 OHM5%1/16W 0402                                                                                   |
| R7, R12, R13                        | RC0402JR-070RL       | Yageo                | RES SMD 0 OHMJUMPER 1/16W 0402                                                                              |
| R8                                  | CRCW040220R0JNED     | Vishay Dale          | RES SMD 20 OHM5%1/16W 0402                                                                                  |
| R9                                  | CRCW040286K6FK       | Vishay Dale          | RES SMD 86.6K OHM1%1/16W 0402                                                                               |
| R17                                 | CRCW060310K0JNEAC    | Vishay Dale          | RES SMD 10K OHM5%1/10W 0603                                                                                 |
| R4                                  | -                    | -                    | Do Not Install                                                                                              |
| R18, R19, R20, R21                  | -                    | -                    | Do Not Install                                                                                              |
| U1                                  | MAX25431ATGA/VY+     | Maxim Integrated     | EVKIT PART - IC; CTRL; AUTOMOTIVE 40V; 55 MICROAMPERE IQ; 2.2MHZ; H-BRIDGE BUCK-BOOST CONTROLLER; TQFN24-EP |
| Q1, Q2, Q3, Q4                      | NVMFS5C460NL         | ON Semiconductor     | MOSFET N-CH 40V 21A 78A 5DFN                                                                                |
| IN_FILTER, IN, OUT, GND, GND2, GND3 | 5020                 | Keystone Electronics | TEST POINT PC LOW PRO W/OUT BASE                                                                            |
| FBR, PGOOD, VCC                     | 5012                 | Keystone Electronics | TEST POINT PC MULTI PURPOSE WHT                                                                             |
| ENABLE, SYNC                        | PEC03SAAN            | Sullins              | CONN HEADER .100 SINGL STR 3POS                                                                             |
| J4                                  | PEC02SAAN            | Sullins              | CONN HEADER .100 SINGL STR 2POS                                                                             |

Evaluates: MAX25431

## MAX25431 EV Kit Schematic

<!-- image -->

Evaluates: MAX25431

## MAX25431 EV Kit PCB Layouts

MAX25431 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25431 EV Kit PCB Layout-Top

<!-- image -->

MAX25431 EV Kit PCB Layout-Layer 1

<!-- image -->

│

## MAX25431 EV Kit PCB Layouts (continued)

MAX25431 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX25431 EV Kit PCB Layout-Bottom

<!-- image -->

MAX25431 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

<!-- image -->

│

Evaluates: MAX25431