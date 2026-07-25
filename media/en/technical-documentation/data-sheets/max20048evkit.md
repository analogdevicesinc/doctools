<!-- lastmod 2022-08-02 -->
## MAX2048 Evaluation Kit

## General Description

The MAX20048 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX20048  currentmode buck-boost controller IC. The EV kit is designed to deliver  up  to  16A  (max)  input  current  with  input  voltages from 2V to 36V. The output-voltage accuracy is ±2% within the  normal  9V  to  18V  operation  input  range  and  a  ±3% accuracy in the 2V to 18V range. Voltage quality can be monitored by observing the PGOOD signal.

The IC offers 5V fixed output voltage and a 4V to 25V OUT programmable range.  Switching frequency is adjustable from 220kHz to 2.2MHz, which allows for small external components,  reduced  output  ripple,  and  guarantees  no AM interference. The IC automatically enters skip mode at light loads with low 55µA quiescent current at no load. The IC comes with a spread-spectrum frequency-modulation option designed to minimize EMI-radiated emissions and a SYNCOUT option that outputs 180° out-of-phase clock.

## Benefits and Features

- 2V to 36V Input Supply Range
- Delivers Up to 16A Input Current
- Enable Input
- Frequency Synchronization Input
- Voltage-Monitoring PGOOD Output
- BIAS Voltage-Monitoring Test Point
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

Evaluates: MAX2048

## Quick Start

## Required Equipment

- MAX20048 EV kit
- 2V to 36V, 20A power supply capable of providing 20A at 2V input
- Voltmeter
- Electronic load

## Procedure

The  MAX20048  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

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
- 10) With the load still on, slowly reduce the input voltage from 14V to 8V. Verify output voltage on the voltmeter is 12V ±2%

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULTSHUNT POSITION   | FUNCTIONS                                         |
|----------|-------------------------|---------------------------------------------------|
| EN       | ON-Middle               | Buck-boost enabled                                |
| PGOOD PU | Installed               | PGOOD pulls up to VBIAS when OUT is in regulation |
| SYNC     | FPWM-Middle             | Forced-PWM mode                                   |

<!-- image -->

## Detailed Description of Hardware

The MAX20048 EV kit provides a proven layout for the MAX20048 buck-boost controller IC. The IC accepts input voltage as high as 36V and can deliver high-load currents, with a 20A (max) input current in boost mode. The EV kit can handle an input-supply transient up to 40V. Various test points are included for evaluation. The EV kit comes installed with a 3mΩ current-sense resistor on the input (R1) and a 4mΩ sense resistor on the output (R2). This sets  the  input  current  limit  to  16.67A  and  the  runaway current limit to 18.75A. A higher current limit can be set by  changing  the  sense  resistors. An  optional  filter  input (IN\_FILTER) is provided to test designs with an additional input filter. The default EV kit comes with no filter installed, so input terminal IN must be used.

## External Synchronization

The IC can operate in fixed-PWM (FPWM) mode or skip mode. The EV kit comes with a default jumper setting of FPWM. To enable skip mode operation, change the jumper to Skip-Middle. The IC can be synchronized to an external clock by connecting the external clock between the middle and ground pins on the SYNC jumper. The IC is forced to operate  in  FPWM  mode  when  SYNC  is  connected  to  a clock source.

## Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is an open-drain output and is high impedance when the output voltage is in regulation. PGOOD is low impedance  when  the  output  voltage  drops  below  92% (typ)  of  its  nominal  regulated  voltage.  To  obtain  a  logic signal, pull up PGOOD to BIAS by installing a shunt on the PGOOD jumper.

## Evaluating Other Voltages

The  EV  kit  comes  installed  with  the  MAX20048ATGCA/ VY+ and is configured for 12V OUT at a 420kHz switching frequency set for 16A (max) input current in boost mode. For  evaluating  other  configurations,  refer  to  the Design Example table in the MAX20048 IC data sheet. Other IC options  for  spread  spectrum/SYNCOUT  can  be  installed as well.

## EMC Performance

EV  kit  provides  a  proven  layout  that  is  compliant  with CISPR-25  requirements  for  EMC  testing.  The  default EV  kit  (12V OUT ,  420kHz  configuration,  without  spread spectrum)  requires  no  additional  filtering  to  meet  the CISPR-25 EMC standards. The IC also comes with the spread-spectrum option, which can be ordered to improve EMC performance.

## Specifications Summary

- VIN  (min): 2V
- VIN  (max): 36V
- V OUT : 12V
- f SW: 420kHz
- I OUT (max): 5A
- Input Current: 16.67A peak current
- Runaway Current: 18.75A peak current
- SPS: Off
- FSYNC: Jumper set to PWM (default)

## Ordering Information

| PART           | TYPE                     |
|----------------|--------------------------|
| MAX20048EVKIT# | 12V Output/420kHz EV kit |

# Denotes RoHS-compliant.

## MAX20048 EV Kit Bill of Materials

| MAX20048 EVKITBOM                   | MAX20048 EVKITBOM   | MAX20048 EVKITBOM    | MAX20048 EVKITBOM    | MAX20048 EVKITBOM                                               |
|-------------------------------------|---------------------|----------------------|----------------------|-----------------------------------------------------------------|
| REF DES                             | QTY                 | MFG PART #           | MANUFACTURER         | DESCRIPTION                                                     |
| C1, C2, C3                          | 3                   | CGA6P3X7S1H106M      | TDK                  | CAP CER 10UF 50V X7S 1210                                       |
| C4                                  | 1                   | EEH-ZE1H680P         | Panasonic            | CAP ALUM POLY 68UF 20% 50V SMD                                  |
| C5, C6, C17                         | 3                   | CGA2B3X7R1H104M050BB | TDK                  | CAP CER 0.1UF 50V X7R 0402                                      |
| C7                                  | 1                   | CGA4J1X7R1V475K125AE | TDK                  | CAP CER 4.7UF 35V X7R 0805                                      |
| C8                                  | 1                   | CGA2B2X7R1E103K050BA | TDK                  | CAP CER 10000PF 25V X7R 0402                                    |
| C9                                  | 1                   | C0402C101K4RACAUTO   | KEMET                | CAP CER SMD 0402 100PF 10% X7R 1                                |
| L2                                  | 0                   | --                   | --                   | Do Not Install                                                  |
| C10, C11, C15                       | 3                   | CAA572X7R1V107M      | TDK                  | CAP CER 100uF, 35V, 2220, X7R                                   |
| C12, C13, C14                       | 3                   | CGA3E3X7R1H474K080AE | TDK                  | CAP CER 0.47UF 50V X7R 0603                                     |
| C16                                 | 1                   | CGA4J1X7R1V225M125AC | TDK                  | CAP CER 2.2UF 35V X7R 0805                                      |
| C18, C19                            | 2                   | --                   | --                   | Do Not Install                                                  |
| D1                                  | 1                   | BAT54AWFILMY         | ST Microelectronics  | DIODE ARRAY SCHOTTKY 40V SOT323                                 |
| L1                                  | 1                   | XAL1060-222E         | Coilcraft            | Inductor, 2.2uH                                                 |
| R1                                  | 1                   | PMR18EZPFV3L00       | ROHM                 | RES 0.003OHM1%1W1206                                            |
| R2                                  | 1                   | PMR18EZPFV4L00       | ROHM                 | RES 0.004OHM1%1W1206                                            |
| R3                                  | 1                   | ERJ-2GEJ473X         | Panasonic            | RES SMD 47K OHM5%1/10W 0402                                     |
| R5                                  | 1                   | ERA-2AEB7322X        | Panasonic            | RES SMD 73.2K OHM5%1/10W 0402                                   |
| R6, R10                             | 2                   | ERA-2AED103X         | Panasonic            | RES SMD 10K OHM0.5% 1/16W 0402                                  |
| R11, R14, R15, R16                  | 4                   | ERJ-2GEJ2R0X         | Panasonic            | RES SMD 2 OHM5%1/10W 0402                                       |
| R7, R12, R13                        | 3                   | RC0402JR-070RL       | Yageo                | RES SMD 0 OHMJUMPER 1/16W 0402                                  |
| R8                                  | 1                   | ERJ-2GEJ200X         | Panasonic            | RES SMD 20 OHM5%1/10W 0402                                      |
| R9                                  | 1                   | ERA-2AEB8662X        | Panasonic            | RES SMD 86.6KOHM 0.1% 1/16W 0402                                |
| R17                                 | 1                   | RC0603JR-0710KL      | Yageo                | RES SMD 10K OHM5%1/10W 0603                                     |
| R4                                  | 1                   | --                   | --                   | Do Not Install                                                  |
| R18, R19, R20, R21                  | 4                   | --                   | --                   | Do Not Install                                                  |
| U1                                  | 1                   | MAX20048ATGA/VY+     | Maxim Integrated     | Automotive 40V, 55uA Iq, 2.2MHz, H-Bridge Buck-Boost Controller |
| Q1, Q2, Q3, Q4                      | 4                   | NVMFS5C460NL         | ON Semiconductor     | MOSFET N-CH 40V 21A 78A 5DFN                                    |
| IN_FILTER, IN, OUT, GND, GND2, GND3 | 6                   | 5020                 | Keystone Electronics | TEST POINT PC LOW PRO W/OUT BASE                                |
| FBR, PGOOD, VCC                     | 3                   | 5012                 | Keystone Electronics | TEST POINT PC MULTI PURPOSE WHT                                 |
| ENABLE, SYNC                        | 2                   | PEC03SAAN            | Sullins              | CONN HEADER .100 SINGL STR 3POS                                 |
| J4                                  | 1                   | PEC02SAAN            | Sullins              | CONN HEADER .100 SINGL STR 2POS                                 |

Evaluates: MAX20048

## MAX20048 EV Kit Schematic

<!-- image -->

Evaluates: MAX20048

## MAX20048 EV Kit PCB Layouts

MAX20048 EV Kit Component Placement Guide-Top

<!-- image -->

│

## MAX20048 EV Kit PCB Layouts (continued)

MAX20048 EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX20048 EV Kit PCB Layouts (continued)

MAX20048 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20048 EV Kit PCB Layouts (continued)

MAX20048 EV Kit Component Placement Guide-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20048