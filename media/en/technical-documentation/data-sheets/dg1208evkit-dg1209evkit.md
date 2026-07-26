<!-- lastmod 2022-08-05 -->
## DG1208, DG1209 Evaluation Kits

## General Description

The  DG1208/DG1209  evaluation  kits  (EV  kits)  provide  a  proven  design  to  evaluate  the  DG1208/DG1209, low-leakage  and  low-charge-injection  multiplexer  devices.  The  DG1208EVKIT#  and  DG1209EVKIT#  are  fully assembled  and  tested,  and  come  populated  with  the DG1208EUE+  and  DG1209EUE+  multiplexers,  respectively. The DG1208 is a single 8-to-1 multiplexing device; the  DG1209  is  a  dual  4-to-1  device.  Both  multiplexer devices  are  available  in  4mm  x  4mm  16-lead  TQFN  or 16-lead TSSOP packages.

## DG1208 Evaluation Kit Board Photo

<!-- image -->

## Features

- SMA Connectors for Analog Inputs and Outputs
- Jumpers at Enable and Address Selection Inputs for Easy Configuration
- Test Points for All Digital and Analog Signals
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## DG1209 Evaluation Kit Board Photo

<!-- image -->

<!-- image -->

## DG1208, DG1209 Evaluation Kits

## DG1208EVKIT# Quick Start

## Recommended Equipment

- DG1208EVKIT#
- ±20V, 100mA tri-output DC power supply
- Digital multimeter

## Procedure

The  DG1208EVKIT#  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Connect the tri-output power supply to the DG1208EVKIT#:
- Set the positive voltage supply to +15V and connect to the VPOS test point.
- Set the negative voltage supply to -15V and connect to the VNEG test point.
- Connect the return of the power supply to GND test point.

## Table 1. DG1208 EV Kit Shunt Positions

| JUMPER         | SHUNT POSITION   | DESCRIPTION                                        |
|----------------|------------------|----------------------------------------------------|
| NO_ CHANNELS   | NO_ CHANNELS     | NO_ CHANNELS                                       |
| J10            | Open             | Disconnect NO1 to SMAconnector J6.                 |
| J10            | 1-2*             | Connect NO1 to SMAconnector J6.                    |
| J9             | Open*            | Disconnect NO2 to SMAconnector J6.                 |
| J9             | 1-2              | Connect NO2 to SMAconnector J6.                    |
| J8             | Open*            | Disconnect NO3 to SMAconnector J6.                 |
| J8             | 1-2              | Connect NO3 to SMAconnector J6.                    |
| J7             | Open*            | Disconnect NO4 to SMAconnector J6.                 |
| J7             | 1-2              | Connect NO4 to SMAconnector J6.                    |
| J5             | Open*            | Disconnect NO5 to SMAconnector J1.                 |
| J5             | 1-2              | Connect NO5 to SMAconnector J1.                    |
| J4             | Open*            | Disconnect NO6 to SMAconnector J1.                 |
| J4             | 1-2              | Connect NO6 to SMAconnector J1.                    |
| J3             | Open*            | Disconnect NO7 to SMAconnector J1.                 |
| J3             | 1-2              | Connect NO7 to SMAconnector J1.                    |
| J2             | Open*            | Disconnect NO8 to SMAconnector J1.                 |
| J2             | 1-2              | Connect NO8 to SMAconnector J1.                    |
| CONTORL INPUTS | CONTORL INPUTS   | CONTORL INPUTS                                     |
| J11            | 1-2              | Connect the selection input A2 to high.            |
| J11            | 2-3*             | Connect the selection input A2 to low.             |
| J12            | 1-2              | Connect the selection input A1 to high.            |
| J12            | 2-3*             | Connect the selection input A1 to low.             |
| J14            | 1-2              | Connect the selection input A0 to high.            |
| J14            | 2-3*             | Connect the selection input A0 to low.             |
| J15            | 1-2              | Enable the device.                                 |
| J15            | 2-3*             | Disable the device; all channels are switched off. |

Evaluates: DG1208, DG1209

- 2) Verify that all jumpers are in their default positions as shown in Table 1.
- 3) Turn on the power supply. Ensure that both positive and negative supplies have less than 1mA (max).
- 4) Move the shunt at J15 to position 1-2 to enable the device. Verify the voltage at the EN test point is 15V.
- 5) Measure the on-resistance of channel 1 between COM and NO1 at 100Ω (typ).
- 6) Move the shunt at J14 from position 2-3 to position 1-2. Verify the voltage at the A0 test point is 15V.
- 7) Measure the on-resistance of channel 2 between COM and NO2 at 100Ω (typ).
- 8) Repeat steps 6 and 7 to test all 8 channels. Verify the on-resistance of each channel is 100Ω (typ). Use the relations in Table 2 to set the jumpers at A2-A0 selection inputs.

│

## DG1208, DG1209 Evaluation Kits

## Table 2. DG1208 EV Kit Control Logic

| A2   | A1   | A0   |   EN | CH. SWITCH ON            |
|------|------|------|------|--------------------------|
| X    | X    | X    |    0 | All Channel Switched Off |
| 0    | 0    | 0    |    1 | NO1                      |
| 0    | 0    | 1    |    1 | NO2                      |
| 0    | 1    | 0    |    1 | NO3                      |
| 0    | 1    | 1    |    1 | NO4                      |
| 1    | 0    | 0    |    1 | NO5                      |
| 1    | 0    | 1    |    1 | NO6                      |
| 1    | 1    | 0    |    1 | NO7                      |
| 1    | 1    | 1    |    1 | NO8                      |

Example to measure channel 5:

- Set the shunt at J11 at position 1-2 (A2 = 1).
- Set the shunt at J12 at position 2-3 (A1 = 1).
- Set the shunt at J14 at position 2-3 (A0 = 1).
- Measure the on-resistance of channel 5 between the NO5 and COM test points.

## DG1209EVKIT# Quick Start

## Recommended Equipment

- DG1209EVKIT#
- ±20V, 100mA tri-output DC power supply
- Digital multimeter

## Procedure

The  DG1209EVKIT#  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Connect the tri-output power supply to the DG1209EVKIT#:
- Set the positive voltage supply to +15V and connect to the VPOS test point.
- Set the negative voltage supply to -15V and connect to the VNEG test point.
- Connect the return of the power supply to GND test point.
- 2) Verify that all jumpers are in their default positions as shown in Table 3.
- 3) Turn on the power supply. Ensure that both positive and negative supplies have less than 1mA (max).
- 4) Move the shunt at J15 to position 1-2 to enable the device. Verify the voltage at the EN test point is 15V.
- 5) Measure the on-resistance of channel 1A between COMA and NO1A at 100Ω (typ).
- 6) Move the shunt at J12 from position 2-3 to position 1-2. Verify the voltage at A0 test point is 15V.
- 7) Measure the on-resistance of channel 2A between COMA and NO2A at 100Ω (typ).
- 8) Repeat steps 6 and 7 to test all 8 channels. Verify the on-resistance of each channel is 100Ω (typ). Use the relations in Table 4 to set the jumpers at the A1 and A0 selection inputs.

│

Evaluates: DG1208, DG1209

Table 3. DG1209 EV Kit Shunt Positions

| JUMPER         | SHUNT POSITION   | DESCRIPTION                                        |
|----------------|------------------|----------------------------------------------------|
| NO_ CHANNELS   | NO_ CHANNELS     | NO_ CHANNELS                                       |
| J5             | Open             | Disconnect NO1Ato SMAconnector J1.                 |
| J5             | 1-2*             | Connect NO1Ato SMAconnector J1.                    |
| J4             | Open*            | Disconnect NO2Ato SMAconnector J1.                 |
| J4             | 1-2              | Connect NO2Ato SMAconnector J1.                    |
| J3             | Open*            | Disconnect NO3Ato SMAconnector J1.                 |
| J3             | 1-2              | Connect NO3Ato SMAconnector J1.                    |
| J2             | Open*            | Disconnect NO4Ato SMAconnector J1.                 |
| J2             | 1-2              | Connect NO4Ato SMAconnector J1.                    |
| J10            | Open             | Disconnect NO1B to SMAconnector J6.                |
| J10            | 1-2*             | Connect NO1B to SMAconnector J6.                   |
| J9             | Open*            | Disconnect NO2B to SMAconnector J6.                |
| J9             | 1-2              | Connect NO2B to SMAconnector J6.                   |
| J8             | Open*            | Disconnect NO3B to SMAconnector J6.                |
| J8             | 1-2              | Connect NO3B to SMAconnector J6.                   |
| J7             | Open*            | Disconnect NO4B to SMAconnector J6.                |
| J7             | 1-2              | Connect NO4B to SMAconnector J6.                   |
| CONTORL INPUTS | CONTORL INPUTS   | CONTORL INPUTS                                     |
| J11            | 1-2              | Connect the selection input A1 to high.            |
| J11            | 2-3*             | Connect the selection input A1 to low.             |
| J12            | 1-2              | Connect the selection input A0 to high.            |
| J12            | 2-3*             | Connect the selection input A0 to low.             |
| J15            | 1-2              | Enable the device.                                 |
| J15            | 2-3*             | Disable the device; all channels are switched off. |

## Table 4. DG1209 EV Kit Control Logic

| A1   | A0   |   EN | CH. SWITCH ON            |
|------|------|------|--------------------------|
| X    | X    |    0 | All Channel Switched Off |
| 0    | 0    |    1 | NO1A, NO1B               |
| 0    | 1    |    1 | NO2A, NO2B               |
| 1    | 0    |    1 | NO3A, NO3B               |
| 1    | 1    |    1 | NO4A, NO4B               |

Example - to measure the channel 3B:

- Set the shunt at J11 at position 1-2 (A1 = 1).
- Set the shunt at J12 at position 2-3 (A0 = 1).
- Measure the on-resistance of channel 3B between NO3B and COMB test points.

Evaluates: DG1208, DG1209

│

## DG1208, DG1209 Evaluation Kits

## Detailed Description

The DG1208 and DG1209 continue the Maxim's family of low-leakage  and  low-charge-injection  multiplexers.  The DG1208/DG1209 EV kits have multiple SMA connectors, test points, and jumpers for inputs and outputs, allowing easy configuration and evaluation.

The DG1208/DG1209 EV kits can be powered from either a bipolar supply or a single supply with nominal voltage up to 20V. Digital Inputs A\_ and EN can be configured high or  low  using  on-board jumpers, or directly from the test points.  Each  analog  input  and  output  can  be  accessed from the SMA connector, as well as the test point associated with them.

## Table 5. DG1208 EV Kit Test Points

| TEST POINTS   | DESCRIPTION                  |
|---------------|------------------------------|
| COM           | COM output channel           |
| GND           | Ground reference             |
| VPOS          | Positive power supply        |
| VNEG          | Negative power supply        |
| A2, A1, A0    | Address selection inputs     |
| EN            | Enable input                 |
| NO8-NO1       | NO_ input channels           |
| J1, J6        | SMAconnectors for NO_ inputs |
| J13           | SMAconnector for COM output  |

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DG1208EVKIT# | EV Kit |
| DG1209EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: DG1208, DG1209

## Configure the DG1208/DG1209 EV Kits

On the DG1208/DG1209 EV kits, every analog and digital channel has their  own  test  points. The  output  channels have dedicated SMA connectors; each four input channels share an SMA connector. See Table 1 and Table 3 for the shunt positions to connect SMA to correct analog channels.

Use the relations in Table 5 and Table 6 to find the test point functions when evaluating the DG1208 or DG1209.

## Control Logic

The DG1208 EV kit uses three selection  inputs A2, A1 and A0, and an enable input EN to determine the switching logic. The DG1209 EV kit uses two selection inputs A1 and A0, and an enable input EN. See Table 2 and Table 4 for detailed control logic.

## Table 6. DG1209 EV Kit Test Points

| TEST POINTS         | DESCRIPTION                          |
|---------------------|--------------------------------------|
| COMA, COMB          | COMA, COMB output channel            |
| GND                 | Ground reference                     |
| VPOS                | Positive power supply                |
| VNEG                | Negative power supply                |
| A1, A0              | Address selection inputs             |
| EN                  | Enable input                         |
| NO4A-NO1A NO4B-NO1B | NO_ input channels                   |
| J1, J6              | SMAconnectors for NO_ inputs         |
| J13, J14            | SMAconnectors for COMA, COMB outputs |

│

## DG1208 EV Kit Bill of Materials

| ITEM   | REF_DES            |   QTY | MFG PART #                                                                                    | MANUFACTURER                          | VALUE        | DESCRIPTION                                                                                                                                                        | COMMENTS   |
|--------|--------------------|-------|-----------------------------------------------------------------------------------------------|---------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | A0-A2, EN          |     4 | 5009                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |            |
| 2      | C1, C7             |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA;TDK; TDK;SAMSUNG        | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                   |            |
| 3      | C2, C8             |     2 | UMK107AB7105KA; CC0603KRX7R9BB105                                                             | TAIYO YUDEN;YAGEO                     | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                           |            |
| 4      | COM, NO1-NO8       |     9 | 5013                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |            |
| 5      | GND, GND1, GND2    |     3 | 5011                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |            |
| 6      | J1, J6, J13        |     3 | 142-0701-851                                                                                  | JOHNSON COMPONENTS                    | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                        |            |
| 7      | J2-J5, J7-J10      |     8 | PBC02SAAN                                                                                     | SULLINS ELECTRONICS CORP.             | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                          |            |
| 8      | J11, J12, J14, J15 |     4 | PCC03SAAN                                                                                     | SULLINS                               | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                           |            |
| 9      | SPACER1-SPACER4    |     4 | 9032 KEYSTONE                                                                                 | 9032 KEYSTONE                         | 9032         | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                         |            |
| 10     | SU1-SU5            |     5 | S1100-B;SX1100-B;STC02SYAN                                                                    | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                            |            |
| 11     | U1                 |     1 | DG1208EUE+                                                                                    | MAXIM                                 | DG1208EUE+   | EVKIT PART - IC; DG1208EUE+; LOW LEAKAGE; SINGLE 8-CHANNEL; ANALOG MULTIPLEXER; PACKAGE OUTLINE NUMBER: 21-0066; LAND PATTERN NUMBER: 90-0117; PACKAGE CODE: U16+1 |            |
| 12     | VNEG               |     1 | 5012 KEYSTONE                                                                                 | 5012 KEYSTONE                         | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |            |
| 13     | VPOS               |     1 | 5010                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                              |            |
| 14     | PCB                |     1 | MAXDG1208                                                                                     | MAXIM                                 | PCB          | PCB:MAXDG1208                                                                                                                                                      |            |
| 15     | C3-C6, C9-C14      |     0 | N/A                                                                                           | N/A                                   | OPEN         | PACKAGE OUTLINE 0603 NON- POLAR CAPACITOR                                                                                                                          |            |
| TOTAL  | TOTAL              |    48 |                                                                                               |                                       |              |                                                                                                                                                                    |            |

## DG1209 EVKit Bill of Materials

| ITEM   | REF_DES                          |   QTY | MFG PART #                                                                                    | MANUFACTURER                          | VALUE        | DESCRIPTION                                                                                                                                                       | COMMENTS   |
|--------|----------------------------------|-------|-----------------------------------------------------------------------------------------------|---------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | A0, A1, EN                       |     3 | 5009                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |            |
| 2      | C1, C7                           |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA;TDK; TDK;SAMSUNG        | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                  |            |
| 3      | C2, C8                           |     2 | UMK107AB7105KA; CC0603KRX7R9BB105                                                             | TAIYO YUDEN;YAGEO                     | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |            |
| 4      | COMA, COMB, NO1A-NO4A, NO1B-NO4B |    10 | 5013                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                          |            |
| 5      | GND, GND1, GND2                  |     3 | 5011                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |            |
| 6      | J1, J6, J13, J14                 |     4 | 142-0701-851                                                                                  | JOHNSON COMPONENTS                    | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                       |            |
| 7      | J2-J5, J7-J10                    |     8 | PBC02SAAN                                                                                     | SULLINS ELECTRONICS CORP.             | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                         |            |
| 8      | J11, J12, J15                    |     3 | PCC03SAAN                                                                                     | SULLINS                               | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                          |            |
| 9      | SPACER1-SPACER4                  |     4 | 9032 KEYSTONE                                                                                 | 9032 KEYSTONE                         | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                         |            |
| 10     | SU1-SU5                          |     5 | S1100-B;SX1100-B;STC02SYAN                                                                    | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                           |            |
| 11     | U1                               |     1 | DG1209EUE+                                                                                    | MAXIM                                 | DG1209EUE+   | EVKIT PART - IC; DG1209EUE+; LOW LEAKAGE; DUAL 4-CHANNEL; ANALOG MULTIPLEXER; PACKAGE OUTLINE NUMBER: 21- 0066; LAND PATTERN NUMBER: 90-0117; PACKAGE CODE: U16+1 |            |
| 12     | VNEG                             |     1 | 5012                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |            |
| 13     | VPOS                             |     1 | 5010                                                                                          | KEYSTONE                              | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                             |            |
| 14     | PCB                              |     1 | MAXDG1209                                                                                     | MAXIM                                 | PCB          | PCB:MAXDG1209                                                                                                                                                     |            |
| 15     | C3-C6, C9-C16                    |     0 | N/A                                                                                           | N/A                                   | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                                          |            |
| TOTAL  |                                  |    48 |                                                                                               |                                       |              |                                                                                                                                                                   |            |

Evaluates: DG1208, DG1209

## DG1208 EV Kit Schematic

<!-- image -->

## DG1209 EV Kit Schematic

<!-- image -->

## DG1208, DG1209 Evaluation Kits

## DG1208 EV Kit PCB Layout

DG1208 EV Kit -Silkscreen Top

<!-- image -->

DG1208 EV Kit -Top Layer

<!-- image -->

DG1208 EV Kit -Bottom Layer

<!-- image -->

│

## DG1208, DG1209 Evaluation Kits

## DG1209 EV Kit PCB Layout

DG1209 EV Kit -Silkscreen Top

<!-- image -->

DG1209 EV Kit -Top Layer

<!-- image -->

DG1209 EV Kit -Bottom Layer

<!-- image -->

│

## DG1208, DG1209 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/20           | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP ,nteJrated reserves the riJht to chanJe the circXitry and speci¿cations withoXt notice at any tiPe.

│

Evaluates: DG1208, DG1209