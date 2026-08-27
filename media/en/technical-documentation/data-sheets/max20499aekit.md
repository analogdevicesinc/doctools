<!-- lastmod 2022-11-23 -->
<!-- image -->

Evaluates: MAX20499

## General Description

The MAX20499A EV Kit is a fully assembled and tested PCB  that  allows  designers  to  explore  the  capabilities of  the  MAX20499A  and  the  MAX20499B  step-down (buck)  voltage  regulators  in  an  evaluation  environment. The MAX20499A has an output current rating of 8A; the MAX20499B has an  output  current  rating  of  12A.  Both devices operate at 3.0V to 5.5V input supply voltage and can regulate across a voltage range from 0.5V to 1.275V.

The  devices  feature  a  2.2MHz  fixed-frequency  PWM mode  for  better  noise  immunity  and  load  transient response.  The  2.2MHz  frequency  operation  accommo -dates  all  ceramic  capacitors  and  minimizes  the  need for  external  components.  The  programmable  spreadspectrum frequency modulation minimizes radiated electromagnetic  emissions.    Integrated  low  R DS(ON) switches improve efficiency at heavy loads and simplify layout.

The I 2 C  interface  supports  dynamic  voltage  adjustment with  programmable  slew  rates.  Other  features  include programmable  soft-start,  over-current  protection,  and over-temperature protection.

The MAX20499A EV Kit comes pre-tested and ready for immediate use.

©

## MAX20499A Evaluation Kit

## Benefits and Features

- Full Silicon Integration Allows for Improved Efficiency and Minimized Space
- Input Voltage Range From 3.0V to 5.5V
- Output Voltages Range From 0.5V to 1.275V
- I 2 C Controlled Output Voltage (6.25mV Steps)
- Excellent Load Transient Response
- Internally Programmable Compensation
- High Switching Frequency of 2.2MHz · Forced PWM Mode
- Enable and Reset Connections Available
- Loop Measurement Ready
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20499A EV kit
- 5V, 10A power supply
- Appropriate resistive load, or an electronic load
- Voltmeter

## Procedure

The EV kit comes fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to PV (input red banana jack) and GND (input black banana jack). Activate the supply.
- 2) Verify that RESETB is at logic-low level (J8).
- 3) Populate  jumper  (J5)  between  EN  and  ON  (PV)  to activate the output.
- 4) Measure the output voltage at the test point (J10).
- 5) Connect appropriate loads to the output.
- 6) Verify that the output voltage at the test point (J10) remains within specification.
- 7) Verify that RESETB is at logic-high level (J8).

## Detailed Description of Hardware

## EV Kit Interface

The banana jacks TP1 (PV) and TP2 (GND) are the main input  power  supply  points  on  the  board.  Connect  a  5V power supply across these connectors. Use J19 as a test point for monitoring the input power supply. The banana jacks TP3 (VOUT) and TP4 (GND) serve as outputs to an external load.

The enable signal (EN) for the Device-Under-Test (DUT) is  activated  (pulled  up)  by  a  jumper  placed  across  the EN and ON pins on jumper J5. The enable signal (EN) is monitored at test point J2, and the power-good signal (RESETB) is monitored at test point J8.

Connector  J1  provides  I 2 C  communication  connectivity (see marked pins on the board). The I 2 C SDA and SCL signals  are  monitored  at  test  points  J6  (SDA)  and  J7 (SCL).

Use  test  points  J9  for  loop  measurements  and  J10 for  measuring  output  voltage  at  the  test  point.  (Use  a differential probe for ripple and transient measurements.) During  efficiency  measurements,  use  test  point  J11  for measuring input voltage.

Input test point (J20), output test points (J24, J12), and GND test points (J21, J13, J25, J22, J23) provide additional flexibility in monitoring the evaluation environment.

For  explicit  information  on  how  these  jumpers  and test  points  interact  with  the  EV  Kit  circuitry  see,  the MAX20499A EV Kit schematic (Figure 1).

## Evaluating IC Capabilities

The default DUT on the board is the MAX20499A, an 8A device. Use the input and output connections described in the EV Kit Interface section to apply input supply voltage and draw the appropriate current from the regulator while monitoring the output voltage at test point J10.

Test  point  J10  provides  a  voltage  readout  at  a  remote sense point located at the output capacitor. This makes J10 suitable for taking output voltage ripple and transient measurements  (using  a  differential  probe)  and  for  taking  efficiency  measurements  (using  a  voltmeter).  When measuring efficiency, connect a voltmeter to J11 for input voltage measurements.

J4 allows an external synchronization pulse to be applied to  the  DUT's  SYNC  pin.  Use  50%  duty  cycle  for  the square wave.

Loop measurements are made using the three-pin header (J9).  Inject  the  sinusoidal  signal  across  the  Bode+  and Bode- pins  when  measuring  the  gain  and  phase  of  the closed loop.

For I 2 C communication specifics, consult the MAX20499 datasheet .

Evaluates: MAX2049

## MAX20499A EV Kit Jumper/Connector/Switch/Test Point Descriptions

Table 1 below contains detail of all connectors, jumpers, switches, and test point onboard the EV Kit.

## Table 1. Serializer Jumper/Connector/Switch/Test Point Descriptions

| JUMPER   | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                        |
|----------|----------|--------------------|-----------------------------------------------------------------|
| J1       | NA       | NA                 | I 2 C communication connections                                 |
| J2       | EN       | NA                 | Test point for monitoring the device enable (EN) signal         |
| J3       | SYNC     | NA                 | Test point for monitoring the device sync (SYNC) signal         |
| J4       | SYNC     | NA                 | Connection point for apply an external synchronization signal   |
| J5       | EN       | OFF                | Jumper for activating the device enable (EN) signal             |
| J6       | SDA      | NA                 | Test point for monitoring the I 2 C SDAsignal                   |
| J7       | SCL      | NA                 | Test point for monitoring the I 2 C SCL signal                  |
| J8       | RESETB   | NA                 | Test point for monitoring the device power-good (RESETB) signal |
| J9       | BODE±    | NA                 | Test point for loop measurements                                |
| J10      | RS+      | NA                 | Test point for measuring the output voltage at the sense point  |
| J11      | PV       | NA                 | Test point for making voltage efficiency measurements           |
| J12      | V OUT    | NA                 | Test point for output voltage                                   |
| J13      | GND      | NA                 | Ground test point (see schematic)                               |
| J18      | V DD     | NA                 | V DD to PV connection (Not required for MINIQUSB)               |
| J19      | PV       | NA                 | Test point for monitoring the device input voltage (PV) signal  |
| J20      | PV       | NA                 | Test point for measuring input voltage                          |
| J21      | GND      | NA                 | Ground test point (see schematic)                               |
| J22      | GND      | NA                 | Ground test point (see schematic)                               |
| J23      | GND      | NA                 | Ground test point (see schematic)                               |
| J24      | V OUT    | NA                 | Test point for output voltage                                   |
| J25      | GND      | NA                 | Ground test point (see schematic)                               |
| J26      | LX       | NA                 | Test point for measuring the LX signal                          |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20499AEKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20499A Evaluation Kit

## MAX20499A EV Kit Bill of Materials

| REFERENCE                                        | QTY   | VALUE   | MANUFACTURER                         | MFG PART #                        | DESCRIPTION                                                            |
|--------------------------------------------------|-------|---------|--------------------------------------|-----------------------------------|------------------------------------------------------------------------|
| C1, C3, C15, C16                                 | 4     | 10µF    | TDK                                  | CGA4J3X7S1A106M125AB              | CAPACITOR, 0805, CERAMIC, 10µF, 10V, X7S                               |
| C2, C4                                           | 2     | 1µF     | TDK                                  | CGA3E1X7R1E105K                   | CAPACITOR, 0603, CERAMIC, 1µF, 25V, X7R                                |
| C5                                               | 1     | 2.2µF   | TDK                                  | CGA3E3X7S1A225K080AE              | CAPACITOR, 0603,CERAMIC, 2.2µF, 10V, X7S                               |
| C6                                               | 1     | 0.1µF   | TDK                                  | C1608X7R1E104K080AA               | CAPACITOR, 0603, CERAMIC, 0.1µF, 25V, X7R                              |
| C7 - C10                                         | 4     | 47µF    | TDK                                  | CGA5L1X7T0E476M                   | CAPACITOR, 1206, CERAMIC, 47µF, 2.5V, X7S                              |
| C17                                              | 1     | 470µF   | KEMET                                | T530X477M006ATE004                | CAPACITOR, 7343, TANTALUM POLYMER, 470µF, 6.3V                         |
| C18 - C21                                        | 4     | 47µF    | TDK                                  | CGA6P1X7S1A476M                   | CAPACITOR, 1210, CERAMIC, 47µF, 10V, X7S                               |
| J1                                               | 1     |         | SULLINS ELECTRONIC CORP              | PPTC102LJBN-RC                    | CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHT ANGLE; 20PINS |
| J2, J3, J6-J8, J10, J11, J18, J19, J22, J23, J26 | 12    |         | SAMTEC                               | TSW-101-07-L-D                    | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS |
| J4, J5, J9                                       | 3     |         | SAMTEC                               | TSW-103-23-G-S                    | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55°C TO +125°C  |
| L1                                               | 1     | 100nH   | TDK, COILCRAFT                       | HPL505028FR10MRD3P, XEL4030-101ME | INDUCTOR, SMT, 100nH, 34A/30A                                          |
| R1, R2, R8                                       | 3     | 1K      | PANASONIC                            | ERJ-3EKF1001V                     | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                      |
| R3                                               | 1     | 2.2     | PANASONIC                            | ERJ-3RQF2R2V                      | RESISTOR, 0603, 2.2 Ω , 1%, 100PPM, 0.10W, THICK FILM                  |
| R4, R5                                           | 2     | 10K     | PANASONIC                            | ERJ-3EKF1002V                     | RESISTOR; 0603; 10K; 1%, 100PPM, 0.10W, THICK FILM                     |
| R6                                               | 1     | 10      | VISHAY DALE                          | CRCW040210R0FKEDC                 | RESISTOR; 0402; 10Ω, 1%; 100PPM; 0.063W, THICK FILM                    |
| R7                                               | 1     | 0       | PANASONIC                            | ERJ-2GE0R00X                      | RESISTOR; 0402; 0Ω; 0%, 0.10W, THICK FILM                              |
| TP1                                              | 1     |         | KEYSTONE                             | 7006                              | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED       |
| TP2                                              | 1     |         | KEYSTONE                             | 7007                              | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK     |
| TP3, TP4                                         | 2     |         | CINCH CONNECTIVITY SOLUTIONS JOHNSON | 108-0740-001                      | BANANA JACK CONNECTOR STANDARD BANANA THREADED, EXTERNAL (NUT)         |
| U1                                               | 1     |         | MAXIM INTEGRATED                     | MAX20499AFOG                      | IC; AUTOMOTIVE SINGLE 8A STEP-DOWN CONVERTER FAMILY                    |
| C11-C14                                          | NP    | 47µF    | TDK                                  | CGA5L1X7S0E476M                   | CAP; SMT (1206); 47µF; 20%; 2.5V; CERAMIC CHIP                         |
| J12, J13, J20, J21, J24, J25                     | NP    |         | SAMTEC                               | TSW-101-07-L-D                    | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS |

│

Evaluates: MAX2049

## MAX20499A EV Kit Schematic Diagram

Figure 1. MAX20499A EV Kit Schematic

<!-- image -->

Evaluates: MAX2049

## MAX20499A EV Kit PCB Layout Diagrams

Figure 2. MAX20499A EV Kit Component Placement Guide-Top Assembly Drawing

<!-- image -->

Evaluates: MAX2049

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 3. MAX20499A EV Kit Component Placement Guide-Top Layer

<!-- image -->

Evaluates: MAX2049

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 4. MAX20499A EV Kit Component Placement Guide-Inner Layer 2

<!-- image -->

Evaluates: MAX2049

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 5. MAX20499A EV Kit Component Placement Guide-Inner Layer 3

<!-- image -->

Evaluates: MAX2049

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 6. MAX20499A EV Kit Component Placement Guide-Inner Layer 4

<!-- image -->

Evaluates: MAX2049

│

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 7. MAX20499A EV Kit Component Placement Guide-Inner Layer 5

<!-- image -->

Evaluates: MAX2049

│

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 8. MAX20499A EV Kit Component Placement Guide-Inner Layer 6

<!-- image -->

Evaluates: MAX2049

│

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 9. MAX20499A EV Kit Component Placement Guide-Inner Layer 7

<!-- image -->

Evaluates: MAX2049

│

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 10. MAX20499A EV Kit Component Placement Guide-Bottom Layer

<!-- image -->

Evaluates: MAX2049

│

## MAX20499A EV Kit PCB Layout Diagrams (continued)

Figure 11. MAX20499A EV Kit Component Placement Guide-Bottom Assembly Drawing

<!-- image -->

Evaluates: MAX2049

## MAX20499A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 1/20            | Initial release              | -               |
|                 1 | 3/20            | Updated Ordering Information | 3               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX2049