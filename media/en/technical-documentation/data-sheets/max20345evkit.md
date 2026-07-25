<!-- lastmod 2022-08-03 -->
## MAX20345 Evaluation Kit

## General Description

The MAX20345 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX20345 wearable charge-management  solution  with  I 2 C  compatibility  for low-power wearable applications. The device includes a linear battery charger, smart power selector, three ultralow quiescent current buck regulators, a buck-boost regulator, three low-dropout (LDO) linear regulators, two load switches, and five GPIO pins.

Refer  to  the  full  MAX20345  IC  datasheet  for  detailed information  regarding  the  operation  and  features  of  the devices.

## Benefits and Features

- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested
- I 2 C Serial Interface

## Quick Start

## Required Equipment

- GPIO Controller Device
- Adjustable Power Supply with 0V to 5V Capability
- Digital Multimeter (DMM)
- I 2 C Controller Device
- Cables with Grabber Connections

## Optional Equipment

- Second Power Supply for LDOs and Load Switches
- Electronic Load
- 10kΩ Resistor

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify basic board operation:

Caution: Do not enable the power supply or external devices until all connections are made.

- 1) Connect the GPIO controller device to PFN1 (J6 pin 11). Set the output to low.
2. Optional: If a GPIO controller is unavailable, connect a 10kΩ pullup resistor from PFN1 to BAT (J5 pin 4).

Evaluates: MAX20345

- 2) Connect the I 2 C controller device to GND (J5 pins 1 and 12, J6 pins 1 and 12), SDA (J6 pin 6), and SCL (J6 pin 7).
- 3) Set the power supply voltage to 3.7V and turn off the supply.
- 4) Connect the positive terminal of the 3.7V to V BAT and the negative terminal to GND.
- 5) Turn on the 3.7V power supply.
- 6) Turn on the GPIO controller device and the I 2 C controller device.
- 7) Set the GPIO controller output high to enable the MAX20345.
- 8) Measure the voltage on SYS (J1 pin 1 and J6 pin 3) and confirm it equals V BAT . If the SYS voltage is less than 2.7V, set the GPIO controller low for three seconds, then set it back to high.
8. Optional: If using a 10kΩ pullup from PFN1 to BAT, short PFN1 to GND for three seconds, then release the short.
- 9) To enable Buck1, use the I 2 C controller to set Buck1En[1:0] = 01 by writing the value 0xE9 to regis -ter 0x16. Measure the voltage of BK1OUT (J4 pin 1) and confirm that it is 0.7V
- 10)  To enable Buck2, use the I 2 C controller to set Buck -2En[1:0] = 01 by writing the value 0xEB to register 0x1F. Measure the voltage of BK2OUT (J4 pin 2) and confirm that it is 1.2V
- 11)  To enable Buck3, use the I 2 C controller to set Buck3En[1:0] = 01 by writing the value 0xED to reg -ister 0x28. Measure the voltage of BK3OUT (J4 pin 3) and confirm that it is 1.8V
- 12) If testing LDOs and load switches, set the second power supply voltage to the desired LDO or load switch input voltage. Turn off the power supply, connect the positive terminal to the LDO or load switch input, connect the negative terminal to GND, then turn on the power supply. Measure the LDO or load switch output and confirm that it matches the expected value setting.
- 13) To test the performance of regulators under a load, connect the electronic load to the regulator output pin.
- 14) The EV kit is ready for additional evaluation.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20345 Evaluation Kit

## Detailed Description of Hardware

The  MAX20345  EV  kit  evaluates  the  MAX20345  wearable charge-management solution. The default settings of the EV kit differ from other versions of the IC to allow for flexible evaluation. Refer to Tables 1-3 for descriptions of the default settings and the readback values of the direct registers and AP registers on reset.

## Optional Pullup Resistors

The  EV  kit  includes  space  to  install  a  resistor  network to  conveniently pull  certain  pins  up  or  down.  Connector

Table 1. Register Bit Default Values

| REGISTER BITS   | MAX20345 EVKIT   |
|-----------------|------------------|
| SysMinVlt       | 4.0V             |
| ILimBlank       | Disabled         |
| ILimCntl        | 450mA            |
| IChgDone        | 30% I FCHG       |
| BatReChg        | BatReg - 70mV    |
| BatReg          | 4.20V            |
| ChgEn           | Enabled          |
| PChgTmr         | 240min           |
| VPChg           | 3.15V            |
| IPChg           | 5% I FCHG        |
| ChgStepRise     | 3.80V            |
| ChgAutoStp      | Enabled          |
| ChgAutoReSta    | Enabled          |
| MtChgTmr        | 60min            |
| FChgTmr         | 600min           |
| ChgIStep        | 50% I FCHG       |
| ChgStepHyst     | 400mV            |
| Buck1VSet       | 0.70V            |
| Buck1En         | Disabled         |
| Buck1IZCSet     | 10mA             |
| ThmEn           | Charge in T1-T3  |
| Buck1ISet       | 150mA            |
| Buck2VSet       | 1.200V           |
| Buck2En         | Disabled         |
| Buck2IZCSet     | 20mA             |
| Buck1SftStrt    | 100ms Soft-Start |

Evaluates: MAX20345

J2 contains a path to a user supplied IO voltage V IO   at pin  1  and  a  path  to  GND  at  pin  6. A  through-hole  fourresistor  network can be placed in J2 with the reference pin at either pin 1 or pin 6 of J2. This attaches the pullup or pulldown resistors on INT , RST , SDA, and SCL. V IO  is supplied through pin 2 of connector J1.

See Table 3 through Table 8 for pin descriptions  of  the connectors J1-J6.

| REGISTER BITS   | MAX20345 EVKIT     |
|-----------------|--------------------|
| Buck1FETScale   | Disabled           |
| Buck2ISet       | 150mA              |
| Buck3VSet       | 1.80V              |
| Buck3En         | Disabled           |
| Buck3IZCSet     | 30mA               |
| Buck2SftStrt    | 100ms Soft-Start   |
| Buck2FETScale   | Disabled           |
| Buck3ISet       | 150mA              |
| BBstVSet        | 5.00V              |
| BBstEn          | Disabled           |
| BBstMode        | Buck-Boost         |
| Buck3SftStrt    | 100ms Soft-Start   |
| Buck3FETScale   | Disabled           |
| BBstIPSet2      | BBstIPSet1 + 100mA |
| BBstIPSet1      | 150mA              |
| LDO1Mode        | LDO                |
| BBstFETScale    | Disabled           |
| LDO2Mode        | Load Switch        |
| LDO1VSet        | 1.8V               |
| LDO1En          | Disabled           |
| LDO3Mode        | LDO                |
| LDO2VSet        | 1.8V               |
| LDO2En          | Disabled           |
| LDO3VSet        | 0.7V               |
| LDO3En          | Disabled           |
| BootDly         | 120ms              |

<!-- image -->

Table 1. Register Bit Default Values (continued)

| REGISTER BITS                    | MAX20345 EVKIT     |
|----------------------------------|--------------------|
| ChgAlwTry                        | Retry              |
| SW2En                            | Disabled           |
| LSW2LowIq                        | Voltage Protection |
| LSW1En                           | Disabled           |
| LSW1LowIq                        | Voltage Protection |
| UsbOkselect                      | CHGIN Rise         |
| PwrRstCfg                        | 0b0110             |
| SftRstCfg                        | Reset Regs         |
| BAT Over Current ThresholdIBatOc | 1600mA             |
| FrshBatDis                       | 1                  |
| Bk2Step                          | 25mV               |
| Buck1Seq                         | Buck1En after 100% |
| Bk1Step                          | 10mV               |
| Bk3Step                          | 50mV               |
| Buck2Seq                         | Buck2En after 100% |
| LDO1Seq                          | LDO1En after 100%  |

## Table 2. I 2 C Direct Register Default Values

| REGISTER   | NAME        | MAX20345 EVKIT   |
|------------|-------------|------------------|
| 0x00       | ChipID      | 0x07             |
| 0x01       | ChipRev     | 0x01             |
| 0x09       | IntMask0    | 0x00             |
| 0x0A       | IntMask1    | 0x00             |
| 0x0B       | IntMask2    | 0x00             |
| 0x0C       | ILimCntl    | 0x86             |
| 0x0D       | ChgCntl0    | 0x07             |
| 0x0E       | ChgCntl1    | 0x73             |
| 0x0F       | ChgTmr      | 0xFF             |
| 0x10       | StepChgCfg0 | 0x30             |
| 0x11       | StepChgCfg1 | 0x03             |
| 0x12       | ThmCfg0     | 0x3F             |
| 0x13       | ThmCfg1     | 0x1F             |
| 0x14       | ThmCfg2     | 0x1F             |
| 0x15       | MONCfg      | 0x10             |
| 0x16       | Buck1Cfg    | 0xE1             |
| 0x17       | Buck1VSet   | 0x40             |
| 0x18       | Buck1ISet   | 0x86             |

| REGISTER BITS   | MAX20345 EVKIT           |
|-----------------|--------------------------|
| BBstSeq         | BBstEn after 100%        |
| Buck3Seq        | Buck3En after 100%       |
| LSW1Seq         | LSW1En after 100%        |
| LDO3Seq         | LDO3En after 100%        |
| LDO2Seq         | LDO2En after 100%        |
| PFN1RInt        | No Resistor              |
| PFN2RInt        | No Resistor              |
| GlbPsvDsc       | Enabled                  |
| LSW2Seq         | LSW2En After 100%        |
| BBstIAdptDis    | Adaptive IPEAK           |
| PFN1PUD         | N/A                      |
| PFN2PUD         | N/A                      |
| JEITASet        | T4 = 25.53%, T3 = 32.94% |
| ILimMax         | 1000mA                   |
| TShdn           | 120°C                    |

| REGISTER   | NAME         | MAX20345 EVKIT   |
|------------|--------------|------------------|
| 0x19       | Buck1Ctr     | 0x01             |
| 0x1A       | Buck1DVSCfg0 | 0x00             |
| 0x1B       | Buck1DVSCfg1 | 0x00             |
| 0x1C       | Buck1DVSCfg2 | 0x00             |
| 0x1D       | Buck1DVSCfg3 | 0x00             |
| 0x1E       | Buck1DVSSPI  | 0x00             |
| 0x1F       | Buck2Cfg     | 0xE3             |
| 0x20       | Buck2VSet    | 0x54             |
| 0x21       | Buck2ISet    | 0x86             |
| 0x22       | Buck2Ctr     | 0x02             |
| 0x23       | Buck2DVSCfg0 | 0x00             |
| 0x24       | Buck2DVSCfg1 | 0x00             |
| 0x25       | Buck2DVSCfg2 | 0x00             |
| 0x26       | Buck2DVSCfg3 | 0x00             |
| 0x27       | Buck2DVSSPI  | 0x00             |
| 0x28       | Buck3Cfg     | 0xE5             |
| 0x29       | Buck3VSet    | 0x56             |
| 0x2A       | Buck3ISet    | 0x86             |

## Table 2. I 2 C Direct Register Default Values (continued)

| REGISTER   | NAME         | MAX20345 EVKIT   |
|------------|--------------|------------------|
| 0x2B       | Buck3Ctr     | 0x04             |
| 0x2C       | Buck3DVSCfg0 | 0x00             |
| 0x2D       | Buck3DVSCfg1 | 0x00             |
| 0x2E       | Buck3DVSCfg2 | 0x00             |
| 0x2F       | Buck3DVSCfg3 | 0x00             |
| 0x30       | Buck3DVSSPI  | 0x00             |
| 0x31       | BBstCfg0     | 0xE5             |
| 0x32       | BBstVSet     | 0x32             |
| 0x33       | BBstISet     | 0x46             |
| 0x34       | BBstCfg1     | 0x23             |
| 0x35       | BBstCtr      | 0x08             |
| 0x36       | BBstDVSCfg0  | 0x00             |
| 0x37       | BBstDVSCfg1  | 0x00             |
| 0x38       | BBstDVSCfg2  | 0x00             |
| 0x39       | BBstDVSCfg3  | 0x00             |
| 0x3A       | BBstDVSSPI   | 0x00             |
| 0x3B       | LDO1Cfg      | 0xE1             |
| 0x3C       | LDO1VSet     | 0x0A             |
| 0x3D       | LDO1Ctr      | 0x01             |

## Table 3. Connector J1

|   PIN | SIGNAL   | DESCRIPTION                          |
|-------|----------|--------------------------------------|
|     1 | SYS      | System load connection               |
|     2 | V IO     | Externally supplied pullup reference |
|     3 | N.C.     | Not Connected                        |
|     4 | N.C.     | Not Connected                        |
|     5 | N.C.     | Not Connected                        |
|     6 | N.C.     | Not Connected                        |
|     7 | MPC3     | Multipurpose control I/O 3           |
|     8 | MPC2     | Multipurpose control I/O 2           |

| REGISTER   | NAME       | MAX20345 EVKIT   |
|------------|------------|------------------|
| 0x3E       | LDO2Cfg    | 0xE3             |
| 0x3F       | LDO2VSet   | 0x09             |
| 0x40       | LDO2Ctr    | 0x02             |
| 0x41       | LDO3Cfg    | 0xE1             |
| 0x42       | LDO3VSet   | 0x08             |
| 0x43       | LDO3Ctr    | 0x04             |
| 0x44       | LSW1Cfg    | 0xE1             |
| 0x45       | LSW1Ctr    | 0x00             |
| 0x46       | LSW2Cfg    | 0xE1             |
| 0x47       | LSW2Ctr    | 0x00             |
| 0x48       | MPC0Cfg    | 0x00             |
| 0x49       | MPC1Cfg    | 0x00             |
| 0x4A       | MPC2Cfg    | 0x00             |
| 0x4B       | MPC3Cfg    | 0x00             |
| 0x4D       | BootCfg    | 0x6B             |
| 0x4E       | PwrCfg     | 0x01             |
| 0x52       | LockMsk    | 0x00             |
| 0x53       | LockUnlock | 0xFF             |

## Table 4. Connector J2

|   PIN | SIGNAL   | DESCRIPTION                                 |
|-------|----------|---------------------------------------------|
|     1 | V IO     | Externally supplied pullup reference        |
|     2 | INT      | Interrupt open-drain output                 |
|     3 | RST      | Reset output. active-low, open-drain output |
|     4 | SDA      | I 2 C serial data input/open-drain output   |
|     5 | SCL      | I 2 C serial clock input                    |
|     6 | GND      | Ground                                      |

Connector J2 is intended for a resistor network to pull the signals up to V IO or down to GND.

## MAX20345 Evaluation Kit

## Table 5. Connector J3

|   PIN | SIGNAL   | DESCRIPTION               |
|-------|----------|---------------------------|
|     1 | CAP      | Internal reference supply |
|     2 | TPUEXT   | TBD                       |
|     3 | LSW2OUT  | Load switch 2 output      |
|     4 | LSW2IN   | Load switch 2 input       |
|     5 | LSW1OUT  | Load switch 1 output      |
|     6 | LSW1IN   | Load switch 1 input       |
|     7 | L1IN     | LDO1 input                |
|     8 | L1OUT    | LDO1 output               |

## Table 7. Connector J5

|   PIN | SIGNAL   | DESCRIPTION                                                                      |
|-------|----------|----------------------------------------------------------------------------------|
|     1 | GND      | Ground                                                                           |
|     2 | N.C.     | Not Connected                                                                    |
|     3 | N.C.     | Not Connected                                                                    |
|     4 | N.C.     | Not Connected                                                                    |
|     5 | N.C.     | Not Connected                                                                    |
|     6 | SET      | External resistor for battery charge current level setting                       |
|     7 | TPU      | Battery temperature thermistor measurement pullup. Do not exceed 1mAload on TPU. |
|     8 | THM      | Battery thermistor measurement connection                                        |
|     9 | BAT      | Battery connection                                                               |
|    10 | SYS      | System load connection                                                           |
|    11 | CHGIN    | +28V/-5.5V protected charger input                                               |
|    12 | GND      | Ground                                                                           |

Evaluates: MAX20345

## Table 6. Connector J4

|   PIN | SIGNAL   | DESCRIPTION                 |
|-------|----------|-----------------------------|
|     1 | BK1OUT   | Buck1 regulator output      |
|     2 | BK2OUT   | Buck2 regulator output      |
|     3 | BK3OUT   | Buck3 regulator output      |
|     4 | L3IN     | LDO3 input                  |
|     5 | L3OUT    | LDO3 output                 |
|     6 | L2IN     | LDO2 input                  |
|     7 | L2OUT    | LDO2 output                 |
|     8 | BBOUT    | Buck-Boost regulator output |

## Table 8. Connector J6

|   PIN | SIGNAL   | DESCRIPTION                                  |
|-------|----------|----------------------------------------------|
|     1 | GND      | Ground                                       |
|     2 | IVMON    | Monitor multiplexer output                   |
|     3 | N.C.     | Not Connected                                |
|     4 | INT      | Interrupt open-drain output                  |
|     5 | RST      | Reset output. active-low, open-drain output  |
|     6 | SDA      | I 2 C serial data input/open-drain output    |
|     7 | SCL      | I 2 C serial clock input                     |
|     8 | MPC1     | Multipurpose control I/O 1                   |
|     9 | MPC0     | Multipurpose control I/O 0                   |
|    10 | PFN2     | Configurable power mode control pin ( KOUT ) |
|    11 | PFN1     | Configurable power mode control pin ( KIN )  |
|    12 | GND      | Ground                                       |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE              |
|-----------------|--------------|----------------------|
| Murata Americas | 770-436-1300 | www.murata.com/en-us |

Note:

Indicate that you are using the MAX20345 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20345EVKIT# | EV Kit |

# Denotes RoHS Compliant

Evaluates: MAX20345

## MAX20345 EV Kit Bill of Materials

| ITEM   | REF_DES            | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                                                                                                            | COMMENTS   |
|--------|--------------------|-----------|-------|-----------------------------------|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1-C3, C7, C11-C13 | -         |     7 | GRM155R60J226ME11                 | MURATA                    | 22UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                                                                                                                     |            |
| 2      | C4-C6, C9, C10     | -         |     5 | C1005X5R0J225K050BC               | TDK                       | 2.2UF         | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 6.3V; TOL=[10%]; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                |            |
| 3      | C14                | -         |     1 | CGA2B3X7R1V104K050BB              | TDK                       | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                       |            |
| 4      | J1, J3, J4         | -         |     3 | TS-108-T-A                        | SAMTEC                    | TS-108-T-A    | CONNECTOR; MALE; THROUGH HOLE; PRECISION MACHINED TERMINAL STRIP; STRAIGHT; 8PINS                                                                                                                      |            |
| 5      | J5, J6             | -         |     2 | TS-112-T-A                        | SAMTEC                    | TS-112-T-A    | CONNECTOR; MALE; THROUGH HOLE; PRECISION MACHINED TERMINAL STRIP; STRAIGHT; 12PINS                                                                                                                     |            |
| 6      | L1-L4              | -         |     4 | DFE201612E-2R2M                   | MURATA                    | 2.2UH         | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                                                                                          |            |
| 7      | R1                 | -         |     1 | ERJ-2RKF1001                      | PANASONIC                 | 1K            | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                  |            |
| 8      | U1                 | -         |     1 | MAX20345AEWN+                     | MAXIM                     | MAX20345AEWN+ | EVKIT PART - IC; PMIC WITH ULTRA-LOW IQ VOLTAGE REGULATORS; OHR DRIVER AND CHARGER FOR SMALL LITHIUM ION SYSTEMS; WLP 56 PINS; 0.4MM PITCH; PACKAGE CODE: W563H3+1; PACKAGE OUTLINE DRAWING: 21-100260 |            |
| 9      | PCB                | -         |     1 | MAX20345                          | MAXIM                     | PCB           | PCB:MAX20345                                                                                                                                                                                           |            |
| 10     | C8                 | DNP       |     0 | GRM155R60J226ME11                 | MURATA                    | 22UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                                                                                                                     |            |
| 11     | J2                 | DNP       |     0 | PBC07SAAN                         | SULLINS ELECTRONICS CORP. | PBC07SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65 DEGC TO +125 DEGC                                                                                                                       |            |
| 12     | R2-R4              | DNP       |     0 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP;VENKEL LTD. |               | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                                |            |
| TOTAL  |                    |           |    25 |                                   |                           |               |                                                                                                                                                                                                        |            |

Evaluates: MAX20345

## MAX20345 EV Kit Schematic

<!-- image -->

## MAX20345 EV Kit PCB Layout

MAX20345 EV Kit PCB -Silk Top

<!-- image -->

MAX20345 EV Kit PCB -Layer 2

<!-- image -->

MAX20345 EV Kit PCB -Top Layer

<!-- image -->

MAX20345 EV Kit PCB -Layer 3

<!-- image -->

## MAX20345 EV Kit PCB Layout

MAX20345 EV Kit PCB -Bottom Layer

<!-- image -->

MAX20345 EV Kit PCB -Silk Bottom

<!-- image -->

## MAX20345 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------|-----------------|
|                 0 | 10/18           | Initial release                                      | -               |
|                 1 | 2/19            | Added Quick Start Guide                              | 1               |
|                 2 | 4/19            | Updated Bill of Materials, Schematic, and PCB Layout | 7 - 10          |
|                 3 | 8/19            | Updated Table 7                                      | 5               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20345