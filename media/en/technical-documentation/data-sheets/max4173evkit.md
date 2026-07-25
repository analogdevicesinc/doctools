<!-- lastmod 2022-08-03 -->
## General Description

The MAX4173 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  contains  a MAX4173TEUT+. The MAX4173 is a high-side, currentsense amplifier with an input common-mode voltage range that extends from 0 to 28V. The current-sense amplifier provides an analog voltage output proportional to the load current flowing through an external sense resistor.

The 20V/V gain version of the MAX4173 (MAX4173TEUT+) and a 150m Ω sense resistor are installed on the board. Other gain versions of the MAX4173 can be evaluated by replacing the MAX4173TEUT+ with a MAX4173FEUT+ (50V/V) or a MAX4173HEUT+ (100V/V) and a user-supplied, external sense resistor. The user can easily match the full-scale sense voltage to the required output-voltage range.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K |
| C2            |     1 | 4.7µF ±10%, 50V X7R ceramic capacitor (1210) Murata GRM32ER71H475K |
| C3, C4, C5    |     0 | Not installed, ceramic capacitors (1210)                           |
| C6            |     0 | Not installed, ceramic capacitor (0603)                            |
| R1            |     1 | 0.15 ±1%, current-sense resistor (1206) IRC LR1206LF-R150-F        |

<!-- image -->

## MAX4173 Evaluation Kit

Features

- ♦ Real-Time Current Monitoring
- ♦ Wide 0 to 28V Input Common-Mode Range Independent of Operating Supply Voltage
- ♦ ±0.5% Full-Scale Accuracy
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4173EVKIT+ | EV kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| R2, R3, R4    |     0 | Not installed, resistors-short (PC trace) (0603)               |
| RS+, RS-      |     2 | Binding posts                                                  |
| TP1           |     1 | Multipurpose test point, orange                                |
| TP2, TP4, TP6 |     3 | Multipurpose test points, black                                |
| TP3, TP5      |     2 | Multipurpose test points, red                                  |
| U1            |     1 | High-side current-sense amplifier (6 SOT23) Maxim MAX4173TEUT+ |
| -             |     1 | PCB: MAX4173 Evaluation Kit+                                   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX4173 when contacting these component suppliers.

## MAX4173 Evaluation Kit

## Quick Start

## Recommended Equipment

- One 12V, 2A power supply
- One electronic load capable of sinking 1A
- Two digital voltmeters (DVMs)

## Procedure

The MAX4173 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply or the electronic load until all connections are completed.

- 1) Set the power supply to 12V and connect the positive  terminal  to  test  point  TP3  (VCC)  on  the  EV  kit. Connect the ground of the power supply to test point TP4 (GND) on the EV kit.
- 2) Connect the positive terminal of the 12V power supply to binding post RS+ on the EV kit.
- 3) Set the electronic load to sink 1A.
- 4) Connect the positive terminal of the electronic load to binding post RS- on the EV kit.
- 5) Connect the negative terminal of the electronic load to the ground of the power supply.
- 6) Connect a voltmeter across test point TP5 (RS+) and test point TP6 (RS-).
- 7) Connect the second voltmeter across test points TP1 (OUT) and TP2 (GND).
- 8) Turn on the power supply.
- 9) Turn on the electronic load.
- 10) Verify  that  the  first  DVM  reading  is  approximately 150mV and the second DVM is approximately 3V.
- 11) Adjust the electronic load current to between 1A and 0A and verify that the reading of the second DVM is approximately 20 times the reading of the first DVM.

## Detailed Description of Hardware

The MAX4173 IC is a current-sense amplifier that measures the load current and provides an analog voltage output. The full-scale VSENSE is set to 150mV. The fullscale ISENSE is set at 1A. They can be changed by replacing current-sense resistor R1 to another appropriate value.

## Applying the VCC Power Supply and the Load Power Supply

The MAX4173 EV kit is installed with a MAX4173TEUT+, which has a gain of 20V/V. The current-sense resistor value is 0.15 Ω . The VOUT is given by:

VOUT = VSENSE x AV = ISENSE x 0.15 x 20

where VSENSE is the sense voltage, ISENSE is the load current, and AV is the gain of the device.

Normal operating VCC is from 3V to 28V. RS+ and RSrange is 0 to 28V.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented at its OUT pin.

The MAX4173 EV kit, which is assembled with the MAX4173TEUT+, is designed with a full-scale sense voltage drop of 150mV. For a typical 1A full-scale load current, this results in the use of a 0.15 Ω sense resistor on the MAX4173 EV kit using the following equation:

<!-- formula-not-decoded -->

For different full-scale sense voltage and full-scale load-current arrangements, the equation above can be used to determine the appropriate current-senseresistor values. Refer to the Recommended Component Values section in the MAX4173 IC data sheet for further guidance.

## Evaluating the MAX4173FEUT+/MAX4173HEUT+

The MAX4173 EV kit can also be used to evaluate other gain versions of the MAX4173 (20V/V, 50V/V, 100V/V = T, F, H suffix, respectively). Replace U1 with a different version of the MAX4173 and refer to the Recommended Component Values section in the MAX4173 IC data sheet for additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4173 Evaluation Kit

<!-- image -->

Figure 1. MAX4173 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4173 Evaluation Kit

<!-- image -->

Figure 2. MAX4173 EV Kit Component Placement GuideComponent Side

Figure 3. MAX4173 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4173 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_