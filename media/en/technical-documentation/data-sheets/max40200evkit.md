<!-- lastmod 2022-08-03 -->
## MAX40200 Evaluation Kit

## General Description

The MAX40200 evaluation kit (EV kit) provides a proven design to evaluate the MAX40200 'ideal-diode'. This EV kit  demonstrates  the  MAX40200  in  a  tiny,  space-saving 4-bump  wafer-level  package  (WLP).  The  MAX40200  is also available in a 5-pin SOT23 (MAX40200AUK+), which is not compatible with this EV kit.

The MAX40200 EV kit PCB comes with two MAX40200ANS+  devices  installed.  The  MAX40200 device is a current-switch, which drops so little voltage as to approximate an 'ideal diode'.

The  MAX40200  parts  are  available  in  a  tiny  0.73mm  x 0.73mm 4-bump WLP with a 0.35mm bump pitch and is only 0.5mm high. It operates over the extended -40°C to +125° C temperature range.

## Evaluates: MAX40200 'Ideal-Diode' in a 4-Bump WLP

## Features

- Drops Less Than 45mV at 500mA
- Less than 2µA Leakage When Reverse-Biased
- Supply Voltage Range: Between 1.5V and 5.5V
- Low Supply Quiescent Current: 7µA (typ), 18µA (max)
- Thermally Self-Protecting
- Tiny 0.73mm x 0.73mm 4-bump WLP
- -40°C to +125°C Temperature Range
- Evaluates MAX40200ANS+
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX40200 Evaluation Kit

## Quick Start

## Required Equipment

- MAX40200 EV kit
- +6V DC power supply
- Electronic load capable of sinking 1A ( e.g., HP6060B)
- Precision voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the below instructions  to  verify  board  operation. Caution:  Do  not turn on the power supply or the electronic load until all the connections are complete.

1.  Connect the positive terminal of the 3.3V supply to the VCC pad. Connect the negative terminal of the 3.3V supply to the GND pad.
2.  Connect the electronic load's positive terminal to the OUT pad and the negative terminal to the GND pad and set to 500mA sink.

## Table 1. Jumper Functions (J1 - J3)

| JUMPER LABEL   | DEFAULT POSITION   | FUNCTION                                                                            |
|----------------|--------------------|-------------------------------------------------------------------------------------|
| J1             | 1-2*               | Enables U1                                                                          |
| J1             | 2-3                | Disables U1                                                                         |
| J2             | 1-2*               | Enables U2                                                                          |
| J2             | 2-3                | Disables U2                                                                         |
| J3             | Not Installed*     | Devices U1 and U2 Enable operates independently                                     |
| J3             | Installed (Note 1) | Connects Enable (EN) input of U1 and U2 together. User-supplied enable input signal |

## Evaluates: MAX40200 'Ideal-Diode' in a 4-Bump WLP

3.  Connect the voltmeter across the VCC and OUT pads.
4.  Verify all the shunts are in default positions, as shown in Table 1.
5.  Do not install J3.
6.  Turn on the power supplies.
7.  Turn on the electronic load and verify that the current flowing is equal to the set value of 500mA.
8.  Verify  that  the  forward  voltage  or  (V DD   -  V OUT ) voltmeter reading is approximately close to 50mV.
9.  Turn off the electronic load.
10.  Set the electronic load to sink 100mA.
11.  Turn on the electronic load.
12.  Verify  that  the  forward  voltage  or  (V DD   -  V OUT ) voltmeter reading is close to approximately 23mV.

│

## MAX40200 Evaluation Kit

## Detailed Description of Hardware (or Software)

The MAX40200 EV kit provides a proven design to evaluate the MAX40200 4-bump, space-saving, 'ideal-diode.' The device blocks reverse voltages and passes current when forward-biased, just as a normal diode would. The device, when forward-biased and enabled, conducts with as little as 45mV of voltage drop while carrying currents as high as 500mA. At higher currents (up to 1A), the voltage drop increases linearly. The MAX40200 protects itself, and any down-stream circuitry, from overtemperature conditions.

When  disabled  (EN  =  low),  the  MAX40200  can  block voltages  up  to  6V  in  either  direction,  making  it  suitable for  most  low-voltage  portable  electronic  devices.  The low (1µA typ.) supply current is independent of the load current. The MAX40200 operates from supplies within the range of 1.5V and 5.5V.

## MAX40200 EV Kit Bill of Materials

|   ITEM | REF_DES                              | DNI/DNP   |   QTY | MFG PART #                          | MANUFACTURER              | VALUE        | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|--------------------------------------|-----------|-------|-------------------------------------|---------------------------|--------------|------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2                               | -         |     2 | GRM188R71E105KA12D; CGA3E1X7R1E105K | MURATA                    | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |            |
|      2 | C3, C4                               | -         |     2 | C1608X7R1E104K080AA                 | TDK                       | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |            |
|      3 | C5                                   | -         |     1 | C0805C104K5RAC; GRM21BR71H104K      | KEMET                     | 0.1UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
|      4 | C6                                   | -         |     1 | 08053C105JAT2A                      | AVX                       | 1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 25V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +85 DEGC; TC=+/-                      |            |
|      5 | EN1, EN2, OUT, TP5-TP8, VBAT1, VBAT2 | -         |     9 | 5005                                | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |            |
|      6 | GND, TP1-TP4, TP9, TP10              | -         |     7 | 5006                                | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      7 | J1, J2                               | -         |     2 | PBC03SAAN                           | SULLINS                   | PBC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                       |            |
|      8 | J3                                   | -         |     1 | PBC02SAAN                           | SULLINS ELECTRONICS CORP. | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                                       |            |
|      9 | U1,U2                                | -         |     2 | MAX40200ANS+                        | MAXIM                     | MAX40200ANS+ | EVKIT PART-IC; SWTC; IDEAL DIODE; OZ34; PACKAGE OUTLINE: 21-0744; PACKAGE CODE: N40C0-1; WLP4                          |            |
|     10 | PCB                                  | -         |     1 | MAX                                 | MAXIM                     | PCB          | PCB Board:MAX40200 EVALUATION KIT                                                                                      |            |

## Evaluates: MAX40200 'Ideal-Diode' in a 4-Bump WLP

## Theory of Operation

The two 'ideal-diode' devices may be used independently or together. The PCB circuit mimics a typical wall adaptor/ battery-charging circuit having different V CC1  and V CC2 . They  are  connected  to  the  common  output,  which  is where the load is situated.

When used independently or together, enable inputs EN1 and  EN2  turns  the  device  on  or  off.  The  device  that  is turned on conducts current to the load. The device that is turned off does not conduct current to the load from its associated V CC  input.

## MAX40200 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX40200 'Ideal-Diode'

## MAX40200 Evaluation Kit

## MAX40200 EV Kit PCB Layout

MAX40200 EV Kit-Top Silkscreen

<!-- image -->

MAX40200 EV Kit-Bottom

<!-- image -->

## Evaluates: MAX40200 'Ideal-Diode' in a 4-Bump WLP

MAX40200 EV Kit-Top

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX40200EVKIT# | EV Kit |

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX40200 'Ideal-Diode'

in a 4-Bump WLP