<!-- lastmod 2022-08-03 -->
## General Description

The MAX9622 evaluation kit (EV kit) provides a proven design to evaluate the MAX9622 single, precision, highbandwidth op amp in a 5-pin SC70 package. The EV kit circuit is preconfigured as a differential amplifier providing an overall gain of 10V/V. BNC connectors are provided for the board input/output, and the components have pads that accommodate 0603 packages, making them easy  to  solder  and  replace.  The  EV  kit  also  evaluates the  MAX9623. Request a free sample of the MAX9623 IC from the factory when ordering the MAX9622 EV kit.

<!-- image -->

## MAX9622 Evaluation Kit

## Features

- S 50MHz Gain-Bandwidth (GBW) Product
- S 2.0V to 5.25V Supply Range
- S Preconfigured for 10V/V Gain
- S Also Evaluates the MAX9623 (IC Replacement)
- S 0603 Components
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9622EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K TDK C1608X5R0J475K |
| C2            |     1 | 1 F F Q 10%, 25V X5R ceramic capacitor (0603) Murata GRM188R61E105K TDK C1608X5R1E105M    |
| C3            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K  |
| C4, C5, C6    |     0 | Not installed, ceramic capacitors (0603)                                                  |

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| IN, OUT       |     2 | 50 I BNC PCB vertical-mount connectors                  |
| R1            |     1 | 49.9 I Q 1% resistor (0603)                             |
| R2, R3, R8    |     0 | Not installed, resistors-PCB short (0603)               |
| R4, R5        |     2 | 1k I Q 1% resistors (0603)                              |
| R6, R7        |     2 | 10k I Q 1% resistors (0603)                             |
| U1            |     1 | High-bandwidth single op amp (5 SC70) Maxim MAX9622AXK+ |
| -             |     1 | PCB: MAX9622 EVALUATION KIT+                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9622 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note : Indicate that you are using the MAX9622 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 2.0V to 5.5V, 10mA DC power supply (VCC)
- Oscilloscope
- Signal generator

R6 = R7, R4 = R5, and R2 = R3. The gain is simply given by the following equation (eq. 1):

<!-- formula-not-decoded -->

The EV kit comes installed with R6 = R7 = 10k I ,  R4 = R5 = 1k I ,  and  R2  =  R3  =  0 I .  IN  is  the  input  voltage applied at the IN BNC connector. Modify the resistors as required for different gains.

For  a  fully  differential  configuration,  the  tolerance  of resistors used greatly impacts the CMRR characteristics of the board. Use 0.1% resistors for enhanced commonmode rejection.  To  interface  to  a  fully  differential  input signal with a common mode other than the EV kit ground, cut the trace connection between the power ground and the circuit ground.

## Noninverting Gain

The EV kit can also be used to provide a simple noninverting gain to the input signal. Remove R6 and change R4 to a 0 I resistor. The gain is then given by the following equation (eq. 2):

<!-- formula-not-decoded -->

where R7 is installed as a 10k I resistor, R5 is installed as a 1k I resistor, R3 is a 0 I PCB short, and V IN  is the input voltage at IN+ of the op amp. The EV kit provides a gain of 11V/V.

## Capacitive Loads

Some  applications  require  driving  large  capacitive loads.  To  improve  the  stability  of  the  amplifier  in  such cases, replace resistor R8 with a suitable resistor value to improve amplifier phase margin by isolating the load capacitor.  The  R8/C4  lowpass  filter  can  also  be  used as an anti-alias filter or to limit amplifier output noise by reducing its output bandwidth.

## Procedure

The  MAX9622  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) This circuit requires a supply voltage of 2.0V to 5.5V. For evaluation purposes, connect a 5.0V supply to the pad labeled VCC.
- 2) Connect the power-supply ground to the GND PCB pad.
- 3) Connect  the  OUT  BNC  connector  to  an  oscilloscope.
- 4) Turn on the power supply.
- 5) Apply a signal at the IN BNC connector.
- 6) Verify the output signal on the oscilloscope.

## Detailed Description of Hardware

The  MAX9622  EV  kit  provides  a  proven  layout  for  the MAX9622  precision,  high-bandwidth  op  amp.  The  EV kit circuit is preconfigured as a differential amplifier providing an overall gain of 10V/V. The signal is amplified through the op amp with the gain set by resistors R5 and R7.  The  device  accepts  a  single-supply  voltage  from 2.0V to 5.5V.

## Op-Amp Configuration

## Differential Amplifier Gain

The EV kit comes configured as a differential amplifier with G = 10. Gain is set by a ratio of R7 to (R5 + R3) if

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9622 Evaluation Kit

<!-- image -->

Figure 1. MAX9622 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9622 Evaluation Kit

<!-- image -->

Figure 2. MAX9622 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9622 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9622 EV Kit PCB Layout-Solder Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9622 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/09           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.