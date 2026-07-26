<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX34406 evaluation kit (EV kit) simplifies evaluation of the MAX34406 quad current-sense amplifier with overcurrent  threshold  comparators.  The  EV  kit  is  fully assembled  and  ready  for  operation.  It  is  shipped  with four 10m I sense resistors in parallel on each channel, which  creates  an  effective  sense  resistance  of  2.5m I . The  EV  kit  ships  with  the  MAX34406  device  installed, which provides a fixed gain of 100V/V. The 2.5m I sense resistance  and  100V/V  gain  provide  an  overcurrent threshold  of  4A  on  each  channel.  The  sense  resistors on the EV kit can be changed to adjust the overcurrent threshold. The PCB and the terminals on the EV kit can support currents up to 32A on each channel.

## MAX34406 EV Kit Board

<!-- image -->

<!-- image -->

## S MAX34406 EV Kit Board

## Equipment Needed

The following equipment is required to use the MAX34406 EV kit:

- 3.3V  to  5V  (10mA)  DC  power  supply  to  supply  the MAX34406 bias
- 4A current source (2V to 28V) to test the full range of the current-sense amplifier
- Small flat-head screwdriver for attaching leads to the current-sense terminals

Ordering Information appears at end of data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34406 Evaluation Kit

## Evaluates: MAX34406

## Features

- S Quick Evaluation of the MAX34406
- S Fully Assembled and Tested
- S Ready for Operation Out of the Box
- S Configured for 4A Thresholds on Each Channel
- S Support Currents Up to 32A on Each Channel
- S Access to Sense Resistors for Threshold Adjustment
- S Amplifier Filtering Can be Added
- S Labeled Test Points for Key Signals
- S PCB Mounting Holes

## EV Kit Contents

## Getting Started

- Connect  a  3.3V  to  5V  DC  power  supply  to  the  red (+) and back (-) banana jacks and apply power. The DC power supply is used by the MAX34406 to power up  the  internal  voltage  reference,  comparators,  and logic. The power supply is not required for the current sense amplifiers and will not damage the device if it is left unconnected.
- Using a screwdriver, connect the through current to be measured to one or more of the green 2-position terminals (labeled IN1 to IN4). Be sure that the current flow is as shown on the PCB; otherwise, the currentsense  amplifier  will  not  indicate  any  current  flow. Current flowing in the wrong direction will not damage the device.
- Apply 0 to 3A (with a common-mode voltage of 2V to 28V)  through  the  green  terminals  and  measure  the resulting  analog  signal  at  the  OUT  test  points  near the  center  of  the  PCB  (Figure  2).  The  OUT  signals should change linearly from 0 to 750mV as the current changes from 0 to 3A.
- Applying more than 4A causes the overcurrent thresholds  to  fire  and  the  SHTDN  output  and  associated OC1 to OC4 outputs to assert. All these signals have labeled test points on the EV kit.

<!-- image -->

## MAX34406 Evaluation Kit Evaluates: MAX34406

## Component List

| DESIGNATION                          | QTY   | DESCRIPTION                                                   |
|--------------------------------------|-------|---------------------------------------------------------------|
| C1                                   | 1     | 0.1µF capacitor                                               |
| C2                                   | 1     | 0.01µF capacitor                                              |
| C3 - C10                             | 8     | Do not populate                                               |
| J1                                   | 1     | Red banana jack                                               |
| J2                                   | 1     | Black banana jack                                             |
| J3 - J6                              | 4     | 2-position screw terminal                                     |
| R1, R3, R28, R29, R30, R31           | 6     | 10k I resistors                                               |
| R2                                   | 1     | Do not populate                                               |
| R4, R5, R14, R15, R16, R17, R26, R27 | 8     | 0 I resistors                                                 |
| R6 - R13, R18 - R25                  | 16    | 10m I ± 1% resistors                                          |
| TP1-TP26                             | 26    | Test points                                                   |
| U1                                   | 1     | Quad current-sense amplifier (24 TQFN-EP) Maxim MAX34406HETG+ |
| -                                    | -     | PCB: MAX34406 EV Kit                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34406 Evaluation Kit

## Evaluates: MAX34406

<!-- image -->

Figure 1. MAX34406 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34406 Evaluation Kit

## Evaluates: MAX34406

<!-- image -->

Figure 2. MAX34406 EV Kit PCB Top Drawing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34406 Evaluation Kit

## Evaluates: MAX34406

<!-- image -->

Figure 3. MAX34406 EV Kit PCB Bottom Drawing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34406EVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may contain lead(Pb) under the RoHS requirements.

## MAX34406 Evaluation Kit Evaluates: MAX34406

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.