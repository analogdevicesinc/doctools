<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX20011G

## General Description

The MAX20011G EV kit is a fully assembled and tested PCB  intended  to  demonstrate  the  capability  of  the MAX20011G  step-down  (buck)  voltage  regulator.  The MAX20011G has an output current rating of 16A. The IC operates at 3V to 5.5V input supply voltage and can regulate to a voltage range of 0.5V to 1.275V.

The  MAX20011G  features  a  2.2MHz  fixed-frequency PWM mode for better noise immunity and load transient response.  The  2.2MHz  frequency  operation  allows  for the use of all ceramic capacitors and minimizes external components. The spread-spectrum frequency modulation option  minimizes  radiated  electromagnetic  emissions. Integrated  low  R DS(ON) switches  improve  efficiency  at heavy loads and simplifiy the layout.

The  MAX20011G  is  offered  with  factory-preset  output voltage.  The  I 2 C  interface  supports  dynamic  voltage adjustment with programmable slew rates. Other features include programmable soft-start, over-current, and overtemperature protections.

## Features

- High Efficiency DC-DC Converter
- Up to 16A Peak Output Current
- Differential Remote Voltage Sensing
- 3.0V to 5.5V Operating Supply Voltage
- ●
- I 2 C Controlled Output Voltage:
- 0.5V to 1.275V in 6.25mV Steps
- Excellent Load Transient Performance
- Programmable Compensation
- 2.2MHz or 1.1MHz Operation
- Loop Measurements Ready
- Proven PCB Layout
- Fully Assembled and Tested

Click here to ask an associate for production status of specific part numbers.

## MAX20011G Evaluation Kit

## Quick Start

## Required Equipment

- MAX20011G EV kit
- 8V, 20A power supply
- Appropriate resistive load, or an electronic load
- Voltmeters
- Ammeter

## Procedure

The EV kit comes fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to PV (TP1) and GND (TP2). Activate the supply.
- 2) Verify that RESET is at logic-low level (J8).
- 3) Populate jumper (J5) between EN and PV to activate the output.
- 4) Measure the output voltage at the sense point (J10).
- 5) Connect appropriate load between banana jacks TP3 (VOUT) and TP4 (GND).
- 6) Verify that the output voltage at the sense point (J10) remains within specification.
- 7) Verify that RESET is at logic-high level (J8).

Ordering Information appears at end of data sheet.

owners.

## MAX20011G Evaluation Kit

## Test setup

Figure 1. MAX20011G Evaluation Kit Configuration

<!-- image -->

## Evaluates: MAX20011G

│

## MAX20011G Evaluation Kit

## Detailed Description of Hardware

## EV Kit Interface

The banana jacks TP1 (PV) and TP2 (GND) are the main input  power  supply  points  on  the  board.  Connect  a  5V power supply across these connectors. Use J32 (PV) as a  test  point  for  monitoring  the  input  power  supply.  The banana jacks TP3 (VOUT) and TP4 (GND) serve as outputs to an external load. The MAX20011G's enable signal (EN) is activated (pulled up) by a jumper placed across the  EN  and  PV  pins  on  jumper  J5.  The  enable  signal (EN) is  monitored  at  test  point  J2,  and  the  power-good signal (RESETB) is monitored at test point J8. Connector J1  provides  I 2 C  communication  connectivity.  Use  test points J27 (Bode+), J28 (Bode-) for loop measurements, and J10 for measuring output voltage at the sense point. (Use a differential probe for ripple and transient measurements.)  During  efficiency  measurement,  use  test  points J32 (PV) and J13 (GND) for measuring input voltage. The output  test  point  (J12)  and  GND  test  points  (J22,  J29, J31) provide additional flexibility in monitoring the evalu -ation environment. For explicit information on how these jumpers and test points interact with the EV kit circuitry, see the MAX20011G EV Kit Schematic .

## I 2 C Communication and PEC

The MAX20011G EV kit is designed to be used with an I 2 C interface such as the MINIQUSB or MAXPICO2MINIQ board and a PC software that can read and write to the

## Evaluates: MAX20011G

device like SimpleI2C.  The IC has a packet error checking  (PEC)  feature.  This  option  can  be  disabled  through CONFIG register 0x05, bit 7 (PEC). In order to write to a register when the PEC is enabled, the I 2 C transaction must be followed by a PEC byte. The SimpleI2C software simplifies this process by providing a PEC enable setting.

## Evaluating IC Capabilities

The default device on the board is the MAX20011G, a 16A device. Use the input and output connections described above  to  apply  the  input  supply  voltage  and  draw  the appropriate  current  from  the  regulator  while  monitoring the output voltage at test point J10. The test point J10 provides a voltage readout at a remote sense point located at the output capacitor. This makes J10 suitable for taking output voltage ripple and transient measurements (using a  differential  probe)  and  for  taking  efficiency  measurements  (using  a  voltmeter).  When  measuring  efficiency, connect  a  voltmeter  to  J32  for  input  voltage  measurements. J4 allows an external synchronization pulse to be applied to the device's SYNC pin. Use the 50% duty cycle for the square wave. Loop measurements are made using J27 (bode+) and J28 (bode-). Inject the sinusoidal signal across  the  bode+  and  bode-  pins  when  measuring  the gain and phase of the closed loop.

For  I 2 C  communication  specifics,  please  refer  to  the MAX20011G data sheet.

## MAX20011G EV Kit Jumpers, Test Points, and Connectors

| JUMPER   | SIGNAL        | DEFAULT POSITION   | FUNCTION                                                         |
|----------|---------------|--------------------|------------------------------------------------------------------|
| J1       | NA            | NA                 | I 2 C communication connections                                  |
| J2       | EN            | NA                 | Test point for monitoring the device enable (EN) signal          |
| J3       | SYNC          | NA                 | Test point for monitoring the device sync (SYNC) signal          |
| J4       | SYNC          | NA                 | Connection point for apply an external synchronization signal    |
| J5       | EN            | OFF                | Jumper for activating the device enable (EN) signal              |
| J8       | RESETB        | NA                 | Test point for monitoring the device power-good ( RESET ) signal |
| J10      | RS+           | NA                 | Test point for measuring output voltage at the sense point       |
| J12      | VOUT          | NA                 | Test point for output voltage                                    |
| J13      | GND           | NA                 | Ground test point (see MAX20011G EV Kit Schematic )              |
| J22      | GND           | NA                 | Ground test point (see MAX20011G EV Kit Schematic )              |
| GND      | GND           | NA                 | Ground test point (see MAX20011G EV Kit Schematic )              |
| J26      | LX            | NA                 | Test point to measure LX signal                                  |
| J27      | bode+         | NA                 | Test point for loop measurement                                  |
| J28      | bode-         | NA                 | Test point for loop measurement                                  |
| J29      | GND           | NA                 | Ground test point                                                |
| J30      | Plugin socket | NA                 | Connection for load transient board (MAXLDBD)                    |
| J31      | GND           | NA                 | Ground test point                                                |
| J32      | PV            | NA                 | Test point for input voltage during efficiency measurement       |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20011GEVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX20011G

## MAX20011G Evaluation Kit

## MAX20011G EV Kit Bill of Materials

| REFERENCE                                         | VALUE                                  | DESCRIPTION                                                                                                                  | MANUFACTURER                    | MFG PART #              |
|---------------------------------------------------|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------------------|
| C1, C3, C15, C16                                  | 10UF                                   | CAP; SMT (0805); 10UF; 20%; 10V; X7S; CERAMIC                                                                                | TDK                             | CGA4J3X7S1A106M125AB    |
| C2, C4                                            | 1UF                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                     | TDK                             | CGA3E1X7R1E105K         |
| C5                                                | 2.2UF                                  | CAP; SMT (0603); 2.2UF; 10%; 10V; X7S; CERAMIC                                                                               | TDK                             | CGA3E3X7S1A225K080AE    |
| C6                                                | 0.1UF                                  | CAPACITOR, 0603, CERAMIC, 0.1UF, 25V, X7R                                                                                    | TDK                             | C1608X7R1E104K080AA     |
| C7-C14, C22-C25                                   | 47UF                                   | CAP; SMT (1206); 47UF; 20%; 4V; X7T; CERAMIC                                                                                 | TDK                             | CGA5L1X7T0G476M160AC    |
| C17                                               | 470UF                                  | CAPACITOR, 7343, TANTALUM POLYMER, 470UF, 6.3V                                                                               | KEMET                           | T530X477M006ATE004      |
| C18-C21                                           | 47UF                                   | 47µF ±20% 10V Ceramic Capacitor X7S 1210                                                                                     | TDK                             | CGA6P1X7S1A476M         |
| C26                                               | 1UF                                    | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                                                                | MURATA                          | GRT155R70J105KE01       |
| GND, J2, J3, J8, J12, J13, J22, J26-J29, J31, J32 | N/A                                    | TEST POINT; SMT; PIN LENGTH=0.185IN; PIN WIDTH=0.135IN; PIN HEIGHT=0.09IN; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT | KEYSTONE                        | USE FOR COLD TEST: 5016 |
| J1                                                | PPTC102LJBN-RC                         | CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHT ANGLE; 20PINS                                                       | SULLINS ELECTRONICS CORP        | PPTC102LJBN-RC          |
| J4, J5                                            | TSW-103-23-G-S                         | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                  | SAMTEC                          | TSW-103-23-G-S          |
| J10                                               | TSW-101-07-L-D                         | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS                                                       | SAMTEC                          | TSW-101-07-L-D          |
| L1                                                | 80NH                                   | EVKIT-PART - INDUCTOR; SMT; 80NH; 20%; 20A                                                                                   | TDK                             | CLT3225C80NMI3          |
| MH1-MH4                                           |                                        | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               | KEYSTONE                        | 9032                    |
| R1, R2                                            | 1K                                     | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                            | PANASONIC                       | ERJ-3EKF1001            |
| R3                                                |                                        | 2.2 RES; SMT (0603); 2.2; 1%; +/-100PPM/DEGC; 0.1000W                                                                        | PANASONIC                       | ERJ-3RQF2R2             |
| R4, R5                                            | 10K                                    | RESISTOR; 0603; 10K; 1%, 100PPM, 0.10W, THICK FILM                                                                           | PANASONIC                       | ERJ-3EKF1002            |
| R6                                                |                                        | 10 RESISTOR; 0402; 10 OHM, 1%; 100PPM; 0.063W, THICK FILM                                                                    | VISHAY DALE                     | CRCW040210R0FK          |
| R7                                                |                                        | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                | PANASONIC                       | ERJ-2GE0R00             |
| R8                                                |                                        | 1 RES; SMT (0603); 1; 1%; +/-100PPM/DEGC; 0.1000W                                                                            | VISHAY                          | CRCW06031R00FN          |
| SU1, SU2                                          |                                        | JUMPER                                                                                                                       | KYCON;SULLINS ELECTRONICS CORP. | SX1100-B;STC02SYAN      |
| TP1, TP2                                          | 575-8                                  | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.350IN [8.9MM] L; 0.203D/0.350L; NICKEL PLATED BRASS                        | KEYSTONE                        | 575-8                   |
| TP3, TP4                                          | 108-0740-001                           | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                     | EMERSON NETWORK POWER           | 108-0740-001            |
| U1                                                | MAX20011G                              | IC; AUTOMOTIVE SINGLE 16A STEPDOWN CONVERTER FAMILY                                                                          | MAXIM INTEGRATED                | MAX20011GAFOA/VY+       |
| J30                                               | HSEC8-110-01-S-DV-A CONNECTOR; FEMALE; | HSEC8-110-01-S-DV-A CONNECTOR; FEMALE;                                                                                       | SAMTEC                          | HSEC8-110-01-S-DV-A     |

Evaluates: MAX20011G

## MAX20011G Evaluation Kit

## MAX20011G EV Kit Schematic

<!-- image -->

│

Evaluates: MAX20011G

## MAX20011G Evaluation Kit

## MAX20011G EV Kit PCB Layout Diagrams

MAX20011G EV Kit PCB Layout-Silk Top

<!-- image -->

MAX20011G EV Kit PCB Layout-Top

<!-- image -->

## Evaluates: MAX20011G

MAX20011G EV Kit PCB Layout-Layer2

<!-- image -->

MAX20011G EV Kit PCB Layout-Layer3

<!-- image -->

│

## MAX20011G Evaluation Kit

## MAX20011G EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20011G EV Kit PCB Layout-Layer4

<!-- image -->

MAX20011G EV Kit PCB Layout-Layer5

MAX20011G EV Kit PCB Layout-Layer6

<!-- image -->

MAX20011G EV Kit PCB Layout-Layer7

<!-- image -->

│

## Evaluates: MAX20011G

## MAX20011G Evaluation Kit

## MAX20011G EV Kit PCB Layout Diagrams (continued)

MAX20011G EV Kit PCB Layout-Bottom

<!-- image -->

MAX20011G EV Kit PCB Layout-Silk Bottom

<!-- image -->

│

## Evaluates: MAX20011G

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX20011G