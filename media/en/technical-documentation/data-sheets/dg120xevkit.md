<!-- lastmod 2022-08-04 -->
## DG120X Evaluation Kit

## General Description

The  DG120X  evaluation  kit  (EV  kit)  provides  a  proven design  to  evaluate  the  DG1206/DG1207,  a  low-leakage  and  low-charge-injection  multiplexer  device.  The DG120XEVKIT#  is  fully  assembled  and  tested,  and comes  populated  with  the  DG1206EUI+,  the  16-to-1 multiplexer  device.  Refer  to  the DG120X EV Kit  Board Picture .

The  DG120XEVKIT#  can  also  be  used  to  evaluate DG1207,  the  8-to-1  device  from  the  same  multiplexer family. See the Configure the DG120X EV Kit section for more information.

## DG120X EV Kit Board Picture

<!-- image -->

<!-- image -->

## Benefits and Features

- ● SMA Connectors for Analog Inputs and Outputs
- ● Jumpers at A3-A0 and EN Digital Inputs for Easy Configuration
- ● Test Points for All Digital and Analog Signals
- ● Fully Assembled and Tested
- ● Proven PCB Layout

Ordering Information appears at end of data sheet.

## DG120X Evaluation Kit

## Quick Start

## Recommended Equipment

- ● DG120XEVKIT#
- ● ±20V, 100mA tri-output DC power supply
- ● Digital multimeter

## Procedure

The DG120X EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the three-output power supply to the DG120XEVKIT#: Set the positive voltage supply to +15V and connect to the VPOS test point. Set the negative voltage supply to -15V and connect to the VNEG test point. Connect the return of the power supply to the GND

test point.

- 2) Verify that all jumpers are in their default positions as shown in Table 1.
- 3) Turn on the power supply. Ensure that both positive and negative supplies have less than 1mA (max).

## Table 1. DG120X EV Kit Shunt Positions

| JUMPER       | SHUNT POSITION   | DESCRIPTION                         |
|--------------|------------------|-------------------------------------|
| NO_ CHANNELS | NO_ CHANNELS     | NO_ CHANNELS                        |
| J26          | Open             | Disconnect NO1 to SMA connector J16 |
| J26          | 1-2*             | Connect NO1 to SMA connector J16    |
| J25          | Open*            | Disconnect NO2 to SMA connector J16 |
| J25          | 1-2              | Connect NO2 to SMA connector J16    |
| J24          | Open*            | Disconnect NO3 to SMA connector J16 |
| J24          | 1-2              | Connect NO3 to SMA connector J16    |
| J23          | Open*            | Disconnect NO4 to SMA connector J16 |
| J23          | 1-2              | Connect NO4 to SMA connector J16    |
| J22          | Open*            | Disconnect NO5 to SMA connector J15 |
| J22          | 1-2              | Connect NO5 to SMA connector J15    |
| J21          | Open*            | Disconnect NO6 to SMA connector J15 |
| J21          | 1-2              | Connect NO6 to SMA connector J15    |

│

Evaluates: DG1206, DG1207

- 4) Move shunt at J27 to position 1-2 to enable the device. Verify the voltage at the EN test point is 15V.
- 5) Measure  the  on-resistance  of  channel  1  between COMA and NO1 at 100Ω (typ).
- 6) Move the shunt at J18 from position 2-3 to position 1-2. Verify the voltage at the A0 test point is 15V.
- 7) Measure  the  on-resistance  of  channel  2  between COMA and NO2 at 100Ω (typ).
- 8) Repeat steps 6 and 7 to test all 16 channels. Verify the on-resistance of each channel is 100Ω (typ). Use the relations in Table 2 to set the jumpers at A3-A0 selection inputs.

## Example to measure channel 8:

- 1) Set shunt J4 to the 2-3 (A3 = 0) position.
- 2) Set shunt J13 to the 1-2 (A2 = 1) position.
- 3) Set shunt J14 to the 1-2 (A1 = 1) position.
- 4) Set shunt J27 to the 1-2 (A0 = 1) position.
- 5) Measure the on-resistance of channel 8 between the NO8 and COMA test points.

## Table 1. DG120X EV Kit Shunt Positions (continued)

| J20            | Open*          | Disconnect NO7 to SMA connector J15               |
|----------------|----------------|---------------------------------------------------|
| J20            | 1-2            | Connect NO7 to SMA connector J15                  |
| J19            | Open*          | Disconnect NO8 to SMA connector J15               |
| J19            | 1-2            | Connect NO8 to SMA connector J15                  |
| JUMPER         | SHUNT POSITION | DESCRIPTION                                       |
| J12            | Open*          | Disconnect NO9 to SMA connector J2                |
| J12            | 1-2            | Connect NO9 to SMA connector J2                   |
| J11            | Open*          | Disconnect NO10 to SMA connector J2               |
| J11            | 1-2            | Connect NO10 to SMA connector J2                  |
| J10            | Open*          | Disconnect NO11 to SMA connector J2               |
| J10            | 1-2            | Connect NO11 to SMA connector J2                  |
| J9             | Open*          | Disconnect NO12 to SMA connector J2               |
|                | 1-2            | Connect NO12 to SMA connector J2                  |
| J8             | Open*          | Disconnect NO13 to SMA connector J1               |
| J8             | 1-2            | Connect NO13 to SMA connector J1                  |
| J7             | Open*          | Disconnect NO14 to SMA connector J1               |
| J7             | 1-2            | Connect NO14 to SMA connector J1                  |
| J6             | Open*          | Disconnect NO15 to SMA connector J1               |
| J6             | 1-2            | Connect NO15 to SMA connector J1                  |
| J5             | Open*          | Disconnect NO16 to SMA connector J1               |
| J5             | 1-2            | Connect NO16 to SMA connector J1                  |
| CONTROL INPUTS | CONTROL INPUTS | CONTROL INPUTS                                    |
| J4             | 1-2            | Connect the selection input A3 to high            |
| J4             | 2-3*           | Connect the selection input A3 to low             |
| J13            | 1-2            | Connect the selection input A2 to high            |
| J13            | 2-3*           | Connect the selection input A2 to low             |
| J14            | 1-2            | Connect the selection input A1 to high            |
|                | 2-3*           | Connect the selection input A1 to low             |
| J18            | 1-2            | Connect the selection input A0 to high            |
| J18            | 2-3*           | Connect the selection input A0 to low             |
| J27            | 1-2            | Enable the device                                 |
| J27            | 2-3*           | Disable the device; all channels are switched off |

Evaluates: DG1206, DG1207

## DG120X Evaluation Kit

## Detailed Description

The DG1206/DG1207 is the first member in the Maxim low-leakage  and  low-charge-injection  multiplexer  family. The DG120X EV kit has multiple  SMA  connectors,  test points, and jumpers for inputs and outputs, allowing easy configuration and evaluation.

The DG120X EV kit can be powered from either a bipolar supply or a single supply with nominal voltage up to 20V. Digital  Inputs  A3-A0,  and  EN  can  be  configured  high or  low  using  on-board jumpers, or directly from the test points.  Each  analog  input  and  output  can  be  accessed from the SMA connector as well as the test point associated with them.

## Configure the DG120X EV Kit

The  DG120XEVKit#  can  be  used  to  evaluate  either DG1206  or  DG1207.  The  EV  kit  is  populated  with

## Table 2. DG120X EV Kit Control Logic

| A3   | A2   | A1   | A0   |   EN | CH. SWITCH ON            |
|------|------|------|------|------|--------------------------|
| X    | X    | X    | X    |    0 | All Channel Switched Off |
| 0    | 0    | 0    | 0    |    1 | 1                        |
| 0    | 0    | 0    | 1    |    1 | 2                        |
| 0    | 0    | 1    | 0    |    1 | 3                        |
| 0    | 0    | 1    | 1    |    1 | 4                        |
| 0    | 1    | 0    | 0    |    1 | 5                        |
| 0    | 1    | 0    | 1    |    1 | 6                        |
| 0    | 1    | 1    | 0    |    1 | 7                        |
| 0    | 1    | 1    | 1    |    1 | 8                        |
| 1    | 0    | 0    | 0    |    1 | 9                        |
| 1    | 0    | 0    | 1    |    1 | 10                       |
| 1    | 0    | 1    | 0    |    1 | 11                       |
| 1    | 0    | 1    | 1    |    1 | 12                       |
| 1    | 1    | 0    | 0    |    1 | 13                       |
| 1    | 1    | 0    | 1    |    1 | 14                       |
| 1    | 1    | 1    | 0    |    1 | 15                       |
| 1    | 1    | 1    | 1    |    1 | 16                       |

│

Evaluates: DG1206, DG1207

DG1206EUI+ by default. Engineers can request a sample of DG1207EUI+ that can be soldered on the EV kit.

Every  analog  and  digital  channel  has  their  own  test points.  The  two  output  channels  have  dedicated  SMA connectors; each four input channels share an SMA connector.  See  Table  1  for  the  shunt  positions  to  connect SMA to correct analog channels.

Use the relations in Table 3 to find the test point functions when evaluating the DG1206 or DG1207.

## Control Logic

The DG120X EV kit uses four selection inputs A3, A2, A1, A0, and an enable input (EN) to determine the switching logic. See the Control Logic section in DG1206/DG1207 data sheet for more information.

## Table 3. DG120XEVKIT# Test Points

| TEST POINTS      | EVALUATE DG1206                | EVALUATE DG1207                |
|------------------|--------------------------------|--------------------------------|
| COMA             | COM output channel             | COMA output channel            |
| COMB             | Do not use                     | COMB output channel            |
| GND              | Ground reference               | Ground reference               |
| VPOS             | Positive power supply          | Positive power supply          |
| VNEG             | Negative power supply          | Negative power supply          |
| A3               | Address selection inputs A3    | Do not use                     |
| A2, A1, A0       | Address selection inputs A2-A0 | Address selection inputs A2-A0 |
| EN               | Enable input                   | Enable input                   |
| NO16 - NO9       | NO16-NO9 input channels.       | NO8B-NO1B input channels       |
| NO8 - NO1        | NO8-NO1 input channels.        | NO8A-NO1A input channels       |
| SMA CONNECTORS   | EVALUATE DG1206                | EVALUATE DG1207                |
| J1, J2, J15, J16 | SMA connectors for NO_ inputs  | SMA connectors for NO_ inputs  |
| J3, J17          | SMA connectors for COM outputs | SMA connectors for COM outputs |

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DG120XEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: DG1206, DG1207

│

## DG120X EV Kit Bill of Materials

| ITEM   | REF_DES                |       |   QTY | MFG PART #                                              | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                                    |
|--------|------------------------|-------|-------|---------------------------------------------------------|----------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------|
| 1      | A0-A3, EN              |       |     5 | 5014                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 2      | C21, C23               |       |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA; MURATA;TDK                     | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                               |
| 3      | C22, C24               |       |     2 | UMK107AB7105KA; CC0603KRX7R9BB105                       | TAIYO YUDEN; YAGEO                     | 1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |
| 4      | COMA, NO1-NO16         |       |    17 | 5013                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 5      | GND, GND1, GND2        |       |     3 | 5011                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 6      | J1-J3, J15, J16        |       |     5 | 142-0701-851                                            | JOHNSON COMPONENTS                     | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                    |
| 7      | J4, J13, J14, J18, J27 |       |     5 | PCC03SAAN                                               | SULLINS                                | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                             |
| 8      | J5-J12, J19-J26        |       |    16 | PBC02SAAN                                               | SULLINS ELECTRONICS CORP.              | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                      |
| 9      | SPACER1- SPACER4       |       |     4 | 9032                                                    | KEYSTONE                               | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                      |
| 10     | SU1-SU6                |       |     6 | S1100-B; SX1100-B; STC02SYAN                            | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                 |
| 11     | U1                     |       |     1 | DG1206                                                  | MAXIM                                  | DG1206       | EVKIT PART -IC; MUX; LOW LEAKAGE 16:1 AND DUAL 8:1 MULTIPLEXER; TSSOP28                                                        |
| 12     | VNEG                   |       |     1 | 5012                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 13     | VPOS                   |       |     1 | 5010                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
| 14     | PCB                    |       |     1 | MAXDG120X                                               | MAXIM                                  | PCB          | PCB:MAXDG120X                                                                                                                  |
| 15     | COMB                   | DNI   |     1 | 5013                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 16     | J17                    | DNI   |     1 | 142-0701-851                                            | JOHNSON COMPONENTS                     | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                    |
| 17     | C1-C20                 | DNP   |     0 | N/A                                                     | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                       |
| TOTAL  | TOTAL                  | TOTAL |    71 |                                                         |                                        |              |                                                                                                                                |

Evaluates: DG1206, DG1207

## DG120X EV Kit Schematic Diagram

<!-- image -->

## DG120X EV Kit PCB Layout Diagrams

DG1206-1207 EV Kit PCB Layout - Top Silkscreen

<!-- image -->

│

## DG120X EV Kit PCB Layout Diagrams (continued)

DG1206-1207 EV Kit PCB Layout - Top View

<!-- image -->

## DG120X EV Kit PCB Layout Diagrams (continued)

DG1206-1207 EV Kit PCB Layout - Bottom View

<!-- image -->

│

## DG120X Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DG1206, DG1207