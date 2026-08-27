<!-- lastmod 2022-08-02 -->
## MAX20098 Evaluation Kit

## General Description

The MAX20098 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX20098  automotive  2.2MHz synchronous step-down controller with 3.5µA I Q . The EV kit PCB comes with a MAX20098ATEA/VY+ installed, as well as various test points and jumpers for evaluation. The EV kit output voltage is fixed and is easily configured with minimum component changes. The EV kit is designed to deliver up to 7A with input voltages from 3.5V to 36V and by  switching  at  400kHz/2.2MHz,  but  can  be  configured to deliver up to 20A. Output-voltage quality can be monitored by observing the PGOOD signal.

## Benefits and Features

- 3.5V to 36V Input Supply Range
- Output Voltage: 5V or 3.3V Fixed, or Adjustable from 1V u p to 10V
- Delivers u p to 20A Output Current
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20098

## Quick Start

## Required Equipment

- MAX20098 EV kit
- 3.5V to 36V, 7A power supply (capable of providing 7A at 3.5V input)
- Digital multimeter (DMM)
- Oscilloscope
- Electronic load capable of sinking 7A

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect  the positive and negative terminals of the power supply to the SUP and GND1 test pads, respectively.
- 3) Set the power-supply voltage to 14V and current limit to 3A.
- 4) Turn on the power supply.
- 5) Verify that OUT is approximately 5V using the DMM.
- 6) Verify  that  the  switching  frequency  is  approximately 2.2MHz by monitoring inductor switching voltage with the oscilloscope.

## Additional Evaluation

- 7) Connect  the  positive  and  negative  terminals  of  the electronic load to OUT and GND, respectively.
- 8) Set  the  electronic  load  to  the  desired  current  at  or below 7A, or use an equivalent resistive load with an appropriate power rating.
- 9) Adjust current limit on the power supply as necessary.
- 10) Turn on the power supply and electronic load.
- 11) Verify that voltage across the VOUT and GND PCB pads is 5V ±1%.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS       |
|----------|--------------------------|-----------------|
| ENABLE   | 1-2                      | Buck enabled    |
| SYNC     | 1-2                      | Forced-PWM mode |

## Detailed Description of Hardware

The  MAX20098  EV  kit  provides  a  proven  layout  for the  MAX20098  synchronous  buck  regulator  IC.  The  IC accepts input voltages as high as 36V and delivers up to 20A. The EV kit can handle an input supply transient up to 42V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) or skip mode. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the IC operates in skip mode for light loads and PWM mode for larger loads. When SYNC is pulled high, the IC is forced to operate in PWM mode across all load conditions. SYNC can be used to  synchronize  with  other  supplies  if  a  clock  source  is present. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage  drops  below  7%  (typ)  of  its  nominal  regulated voltage.

## BST Diode

The BST diode (D1) can be removed if operating in skip mode or at low switching frequency, 400kHz. Skip mode is set with a shunt position of 2-3 on the SYNC jumper.

## Evaluating the MAX20098

The  IC  is  available  in  fixed  5V  and  3.3V  outputs.  The EV  kit  comes  installed  with  the  5V  output  version.  To externally  configure  the  output  voltage,  remove  R1  and place appropriate resistors in positions R17 and R19. To optimize efficiency, refer to the MAX20098 IC data sheet.

## Evaluate 400kHz or 2.2MHz Operation

Order the MAX20098EVKIT# to evaluate 2.2MHz operation. Order the MAX20098LFEVKIT# to evaluate 400kHz operation. Table 2 lists different component selections for both 2.2MHz and 400kHz switching frequencies (the other components remain the same).

## Ordering Information

| PART             | TYPE   | f SW   |
|------------------|--------|--------|
| MAX20098EVKIT#   | EV Kit | 2.2MHz |
| MAX20098LFEVKIT# | EV Kit | 400kHz |

#Denotes RoHS compliant.

│

## MAX20098 EV Kit Bill of Materials

| REFERENCE DESIGNATOR                                               | QTY                                                                | DESCRIPTION                                                        | MFG PART #                                                         |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| COMPONENT LIST: 5V OUT , 2.2MHz SWITCHING FREQUENCY, UP TO 7A LOAD | COMPONENT LIST: 5V OUT , 2.2MHz SWITCHING FREQUENCY, UP TO 7A LOAD | COMPONENT LIST: 5V OUT , 2.2MHz SWITCHING FREQUENCY, UP TO 7A LOAD | COMPONENT LIST: 5V OUT , 2.2MHz SWITCHING FREQUENCY, UP TO 7A LOAD |
| C6                                                                 | 1                                                                  | 2.2µF±20% 50V Ceramic Capacitor (0805)                             | CGA4J3X7R1H225M125AE                                               |
| C8                                                                 | 1                                                                  | 4700PF±5% 50V Ceramic Capacitor (0402)                             | CL05B472JB5NNNC                                                    |
| C9                                                                 | 1                                                                  | 4.7µF ±10% 50V X7R Ceramic Capacitor (1210)                        | GRM32ER71H475KA88K                                                 |
| C12                                                                | 1                                                                  | 0.1µF ±10% 50V Ceramic Capacitor (0402)                            | GRM155R71H104KE14                                                  |
| C16                                                                | 1                                                                  | 2.2µF±10% 10V Ceramic Capacitor (0603)                             | CL10B225KP8NNN                                                     |
| C19                                                                | 1                                                                  | 47µF ±10% 16V X6S Ceramic Capacitor (1210)                         | GRM32ER71A476KE15L                                                 |
| C20                                                                | 1                                                                  | 47µF ±10% 16V X6S Ceramic Capacitor (1210)                         | GRM32ER71A476KE15L                                                 |
| D1                                                                 | 1                                                                  | Diode; SCH; Schottky Diode; SMT (SOT23-3); PIV = 30; IF = 0.2A     | BAT54A                                                             |
| L1                                                                 | 1                                                                  | 1.2µH Inductor                                                     | XAL1060-122MEB                                                     |
| Q1, Q2                                                             | 2                                                                  | N-Channel 40V Surface Mount 5-DFN, 8-SO Flat Lead (5x6)            | NVMFS5C468NLT1G                                                    |
| R1, R2, R5, R7, R8                                                 | 6                                                                  | 0 Ω resistor (0402)                                                | CRCW04020000Z0EDHP                                                 |
| R3                                                                 | 1                                                                  | 2.5 Ω resisitor (0402)                                             | -                                                                  |
| R4                                                                 | 1                                                                  | 10k Ω resistor (0402)                                              | RC0402FR-0710K                                                     |
| R10                                                                | 1                                                                  | 0.01 Ω resistor (1206)                                             | PMR18EZPFU10L0                                                     |
| R11                                                                | 1                                                                  | 100k Ω resistor (0402)                                             | TNPW0402100KBE                                                     |
| R12                                                                | 1                                                                  | 12k Ω resistor (0402)                                              | ERJ-2RKF1202                                                       |
| R15                                                                | 1                                                                  | 51.1k Ω resistor (0603)                                            | ERJ-3EKF5112V                                                      |
| U1                                                                 | 1                                                                  | MAX20098ATEA/VY+                                                   | -                                                                  |
| -                                                                  | 1                                                                  | PCB: MAX20098 EVKIT                                                | -                                                                  |
| COMPONENT CHANGES FOR 400kHz SWITCHING FREQUENCY                   | COMPONENT CHANGES FOR 400kHz SWITCHING FREQUENCY                   | COMPONENT CHANGES FOR 400kHz SWITCHING FREQUENCY                   | COMPONENT CHANGES FOR 400kHz SWITCHING FREQUENCY                   |
| D1                                                                 | DNI                                                                | Diode; SCH; Schottky Diode; SMT (SOT23-3)                          | BAT54A                                                             |
| L1                                                                 | 1                                                                  | 4.7µH Inductor                                                     | XAL1060-472MEB                                                     |
| R3                                                                 | 1                                                                  | 0 Ω resistor (0402)                                                | -                                                                  |
| R12                                                                | 1                                                                  | 66.5k Ω resistor (0402)                                            | ERJ-2RKF6652X                                                      |
| R15                                                                | 1                                                                  | 30.1k Ω resistor (0603)                                            | PTN0603E3012BST1                                                   |
| Note: R10 can be adjusted to change the output current limit.      | Note: R10 can be adjusted to change the output current limit.      | Note: R10 can be adjusted to change the output current limit.      | Note: R10 can be adjusted to change the output current limit.      |

Evaluates: MAX20098

## MAX20098 EV Kit Schematic

<!-- image -->

## MAX20098 EV Kit PCB Layouts

MAX20098 EV Kit Component Placement Guide-Silkscreen (Top)

<!-- image -->

MAX20098 EV Kit PCB Layout-Soldermask (Top)

<!-- image -->

MAX20098 EV Kit Component Placement Guide-Silkscreen (Bottom)

<!-- image -->

MAX20098 EV Kit PCB Layout-Soldermask (Bottom)

<!-- image -->

│

## MAX20098 EV Kit PCB Layouts (continued)

MAX20098 EV Kit PCB Layout-Art Film (Top)

<!-- image -->

MAX20098 EV Kit PCB Layout-Internal (Layer 2)

<!-- image -->

MAX20098 EV Kit PCB Layout-Internal (Layer 3)

<!-- image -->

## MAX20098 EV Kit PCB Layouts (continued)

MAX20098 EV Kit PCB Layout-Art Film (Bottom)

<!-- image -->

MAX20098 EV Kit PCB Layout-Art Film (Fab Drawing)

<!-- image -->

│

## MAX20098 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/17            | Initial release                                                                                                                                                          | -               |
|                 1 | 2/18            | Updated Bill of Materials                                                                                                                                                | 3               |
|                 2 | 10/18           | Updated General Description , added BST Diode section, added Evaluate 400kHz or 2.2.MHz Operation , updated Ordering Information , and MAX20098 EV Kit Bill of Materials | 1-3             |
|                 3 | 11/18           | Updated Bill of Materials                                                                                                                                                | 3               |
|                 4 | 4/19            | Updated Bill of Materials                                                                                                                                                | 3               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX20098