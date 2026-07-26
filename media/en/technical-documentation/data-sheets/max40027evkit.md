<!-- lastmod 2022-08-03 -->
## MAX40027 Evaluation Kit

## General Description

The MAX40027 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to  evaluate  the  MAX40027  ultra-low  280ps  propagation delay,  ultra-low  dispersion  dual  comparator.  The  board provides layout options that allow the input termination to be easily modified for alternative input terminations. The comparator  outputs  are  designed  to  drive  low  voltage differential signal outputs (LVDS). The LVDS outputs help minimize  power  dissipation  and  interfaces  directly  with high speed interconnect devices, FPGAs and CPUs. The MAX40027 comparator is ideal for time of flight distance measurement applications.

This evaluation kit demonstrates the MAX40027.

## Features

- Fast Propagation Delay: 280ps (Typ)
- Low Over-Drive Dispersion: 25ps (V OV  = 10mV to 1V)
- Supply Voltage 2.7V to 3.6V
- 45.9mW at 2.7V Supply (Per Comparator)
- Power-Efficient LVDS Outputs
- -40°C to +125°C Temperature Range

Ordering Information appears at end of data sheet.

## MAX40027 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX40027

## Quick Start

## Required Equipment

- MAX40027 EV kit
- 6 matched-length SMA cables (preferably up to 18GHz capable), 2 feet, or less, in length
- +3.6V, 100mA DC power supply
- High-speed signal generator with differential outputs capable of generating square waves with &lt; 500ps rise times. (e.g., HP 8131A)
- High-speed oscilloscope with 50Ω termination

## Procedure

The  MAX40027  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply to +3.3V. Disable the power supply.
- 2) Connect the negative terminal of the power supply to the GND pad. Connect the positive terminal of the power supply to the V1\_SUPPLY pad.
- 3) Set the signal generator to produce an output square-wave signal of 100mV P-P differential at a frequency of 250MHz with a common mode voltage of +2.5V. Disable the signal generator outputs.

## MAX40027 Evaluation Kit

- 4) Connect the signal generator differential outputs to the edge-mount SMA connector marked IN1+ INPUT and IN1- INPUT.
- 5) Enable power supply. Enable the signal generator.
- 6) Verify that the supply current is within 5% of 35mA
- 7) Monitor and verify inputs 'IN1+ 50Ω' and 'IN1- 50Ω' with the oscilloscope. The oscilloscope must be configured for 50Ω input termination.
- 8) Monitor and verify outputs OUT1+ and OUT1- with the oscilloscope. The oscilloscope must be configured for 50Ω input termination.
- 9) To test comparator 2, repeat steps 4 to 8  but using the inputs and outputs intended for comparator 2.

## Detailed Description of Hardware

The MAX40027 EV kit provides a proven design to evaluate MAX40027 dual comparator. The device offers ultra-low 280ps propagation delay, ultra-low dispersion of 25ps.

## Supply Voltage

The  MAX40027  EV  kit  operates  from  standard  supply levels  +2.7V  to  +3.6V.  Connect  the  positive  and  negative supply  voltages  (ground  return)  to  V1\_SUPPLY  and  GND pads, respectively.

## Inputs

The MAX40027 EV kit provides an efficient  and  simple method  to  evaluate  the  comparator.  The  inputs  to  the device  are  from  INx+  INPUT  and  INx-  INPUT  SMA connectors.  INx+  50Ω  and  INx-  50Ω  SMA  connectors serve  as  terminating  leads  at  the  input  when  using  an oscilloscope  to  terminate  and  observe  the  input  signal. During this condition R1 is not populated. When not using INx+  50Ω  and  INx-  50Ω  connectors,  R1/R8  should  be populated with 100Ω. The differential inputs accept input signals in the common mode range from +1.5V to V CC  + 0.1V.

## Outputs

OUTx+ and OUTx- SMA connectors access the MAX40027 outputs.  Both  OUTx+  and  OUTx-  output  traces  are  in default AC- coupled for easy evaluation when connecting to  a  50Ω  terminated  oscilloscope.  The  outputs  OUTx+ and  OUTx-  are  50Ω  single-ended  characteristic  lines either  terminated  by  an  oscilloscope  or  a  subsequent high-speed device. The outputs are LVDS levels. When terminating  with  a  scope,  the  outputs  are  AC  coupled. When connecting the outputs to an LVDS device such as an FPGA, replace the AC coupling capacitors C3 and C4 (or C7 and C8 for comparator B) with 0Ω shorts and R4/ R12 populated with 100Ω termination resistor.

## Input and Output Termination

## Input Termination

## Terminating Inputs with a 50Ω Oscilloscope

By default, the EV kit is designed to terminate the inputs when 50Ω oscilloscope probes are connected to the INx+ 50Ω  and  INx-  50Ω  termination  SMA  edge  connectors. When inputs from a signal generator are connected to the INx+ INPUT and INx- INPUT SMA connector inputs, INx+ 50Ω and INx- 50Ω are used to terminate the input signals with  a  50Ω  oscilloscope. This  enables  the  input  signals to be observed at the oscilloscope and at the same time terminates the micro-strip line. Populate R5, R2, R6, and R3 (or R7, R10, R9, and R11 for comparator 2) resistors with 0Ω resistors when operating this way.

## When a 50Ω Oscilloscope is Not Terminated at Inputs

When inputs from a signal generator are connected to the INx+ INPUT and INx- INPUT SMA connectors and when it is not desired to terminate the inputs to a scope, then the 0Ω resistor at R2 and R3 (or R10 and R11 for comparator 2) resistors must be de-populated and the 100Ω termination resistor must be populated at R1/R8.

This is helpful when high-speed devices (TIAs, differential amplifiers) connect directly to the inputs of MAX40027 for signal discrimination.

## Output Termination

## Terminating Outputs with a 50Ω Oscilloscope

By default, the EV kit is designed to terminate the outputs when a 50Ω oscilloscope is connected to the OUTx+ and OUTx- SMA's. C3 and C4 (or C7 and C8 for comparator 2) AC coupling capacitors couple the outputs to the 50Ω oscilloscope  inputs.  R4/R12  termination  resistor  is  not populated in this case.

## When a 50Ω Oscilloscope is Not Terminated at Inputs

When  connecting  to  a  subsequent  high-speed  device designed to accept LVDS inputs, then C3 and C4 (or C7 and  C8  for  comparator  2)  capacitors  must  be  replaced with 0Ω resistor shorts and R4/R12 resistor must be populated with 100Ω termination.

## Input and Output Delay Compensation

The MAX40027 EV kit provides ease of access to evaluate the propagation delay of the comparator. The length of the trace from R2 (or R10) to INx+ 50Ω and R3 (or R11)  to INx- 50Ω is equal to the length of the trace from differential outputs of the MAX40027 to the OUTx+ and OUTx-SMA connectors. Hence the time taken for the input signal to travel from R2 (or R10) to INx+ 50Ω will be equal to the time  taken  by  the  output  signal  to  reach  the  OUTx+ connector,  thereby  cancelling  delay  of  the  EV  kit  PCB itself.  When  terminating  input  and  output  signals  with  a scope, the delay observed is the delay of the MAX40027.

## Layout Guidelines

- Use a PCB with a low-impedance ground plane.
- Mount one or more 10nF ceramic capacitors between GND and VCC, as close to the pins as possible.
- Multiple bypass capacitors help to reduce the effect of trace impedance and capacitor ESR.
- Choose bypass capacitors for minimum inductance and ESR.
- Use a 100Ω termination resistor for the LVDS output, connected directly between OUTx+ and OUTx-, if practical. If the termination resistor can't be located adjacent to the outputs, use a 100Ω microstrip between the output pins and the termination resistor.
- Ensure that there is no parasitic coupling between the inputs and the outputs. Such coupling serves as feedback and can result in oscillation.
- Minimize any parasitic layout inductance.

## Test Setup

Note that a test setup optimized for high-speed measurement  is  essential  to  observe  the  true  performance  of  the MAX40027  device.  Use  matched  SMA  cables  for  the differential  inputs  and  outputs.  Also,  account  for  the  time delay and skew of the test setup. For accurate measurement of  the  device's  rise  and  fall  times,  an  oscilloscope  with  a bandwidth  several  times  larger  than  the  maximum  signal frequency must be used.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40027EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX40027 EV Kit Bill of Materials

| NOTE: DNI--> DO NOT      | INSTALL(PACKOUT)   | ; DNP--> DO NOT PROCURE                                                                                                                        |                                                          |              |                                                                                                                            |
|--------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------|
| 1 C1, C9                 | -                  | 2 C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                              | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA; TDK;TDK | 100PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                  |
| 2 C2-C5, C7, C8, C10     | -                  | 7 CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA;TDK;TAIY O YUDEN;TDK              | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |
| 3 C6                     | -                  | 1 C2012X7R1H225K125AC; CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                                                                              | TDK;TDK;TDK                                              | 2.2UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |
| 4 GND, GND1, V1_SUPPLY   | -                  | 3 9020 BUSS                                                                                                                                    | WEICO WIRE                                               | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                   |
| 5 J1-J12                 | -                  | 12 32K243-40ML5                                                                                                                                | ROSENBERGER                                              | 32K243-40ML5 | CONNECTOR; FEMALE; SMT; SMA JACK PCB; RIGHT ANGLE; 2PINS INDUCTOR; SMT (0402); FERRITE-BEAD;                               |
| 6 L1                     | -                  | 1 BLM15PX601SN1                                                                                                                                | MURATA                                                   | 600          | 600; TOL=+/-25%; 0.9A                                                                                                      |
| 7 MH1-MH4                | -                  | 4 9032                                                                                                                                         | KEYSTONE                                                 | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                  |
| 8 R2, R3, R5- R7, R9-R11 | -                  | 8 RC0402JR-070RL; CR0402-16W-000RJT                                                                                                            | YAGEO PHYCOMP;VENKEL LTD.                                | 0            | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                      |
| 9 U1                     | -                  | 1 MAX40027                                                                                                                                     | MAXIM                                                    | MAX40027     | EVKIT PART - IC; MAX40027; CC08; FAST DUAL COMPARATOR; PACKAGE OUTLINE DRAWING: 21-100369; LAND PATTERN DRAWING: 90-100136 |
| 10 PCB                   | -                  | 1 MAX40027                                                                                                                                     | MAXIM                                                    | PCB          | PCB:MAX40027                                                                                                               |
| 11 R1, R8                | DNP                | 0 CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL                                                                                             | VISHAY DALE; PANASONIC; YAGEO PHYCOMP                    | 100          | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                    |
| 12 R4, R12 TOTAL         | DNP                | 0 CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 40                                                                                             | VISHAY DALE;YAGEO PHICOMP;ROHM                           | 1K           | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |

Evaluates: MAX40027

## MAX40027 EV Kit Schematics

<!-- image -->

## MAX40027 EV Kit Schematics (continued)

<!-- image -->

## MAX40027 EV Kit PCB Layout Diagrams

MAX40027 EV Kit-Top Silkscreen

<!-- image -->

MAX40027 EV Kit-GND2

<!-- image -->

MAX40027 EV Kit-Top

<!-- image -->

MAX40027 EV Kit-GND3

<!-- image -->

│

## MAX40027 EV Kit PCB Layout Diagrams (continued)

MAX40027 EV Kit-Bottom

<!-- image -->

MAX40027 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX40027