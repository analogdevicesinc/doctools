<!-- lastmod 2022-08-03 -->
## MAX30034 Evaluation Kit

## General Description

The MAX30034 evaluation kit (EV Kit) provides a convenient way to evaluate the MAX30034 defibrillation/surge/ ESD  protector.  The  MAX30034  is  designed  to  absorb repetitive  defibrillation  and  other  high-energy  pulses  to protect  sensitive  electronic  circuitry  in  ECG  and  other medical/industrial equipment.

## Features

- Low On-Voltage 3.9V (typ)
- Low Leakage Current 3pA (typ)
- Fast Turn-On &lt; 2ns
- High Peak Current in Excess of 4A
- Withstands Over 100k Defibrillation Pulses Without Failure

## Safety Consideration

Testing  of  the  MAX30034  with  high-energy  pulses  (400 Joules)  can  cause  serious  injury  or  death  if  preformed incorrectly. The testing described in this data sheet should only be performed by a qualified technician. Adhere to all safety  precautions  in  the  defibrillation  surge  generator manual.

The MAX30034 EV kit board is designed to receive a fullpower IEC60601-2-27 pulse at the rate of  once  every  20 seconds.  Pulsing  at  a  faster  rate  will  exceed  the  power ratings of the installed resistors.  In  accordance  with IEC60601-2-27, the EV kit board has been designed for voltages up to 5000V. Higher voltages are not recommended.

Ordering Information appears at end of data sheet.

Evaluates: MAX30034

## Test Configuration

## Required Equipment

- MAX30034 EV kit PCB
- Defibrillation surge generator
- High-voltage test leads and connectors
- Oscilloscope
- Current probe
- Source meter with picoamp accuracy.

## Configuration for Defibrillation Tester with Internal Human Body Model

Customers  using  a  normal  IEC60601-2-27  test  set  as their  defibrillation  surge  generator  will  not  need  resistors R4  through  R12  installed  on  the  MAX30034  EV  Kit. These  test  sets  have  an  internal  human  body  model (Internal 100Ω resistor from HV output to ground) and R4 through R12 should be left unpopulated.

High-voltage output and ground terminals of the defibrillation  surge  generator  should  be  connected  to the  VIN  (TP1)  and  ground  (TP2),  respectively,  using wire  and  connectors  rated  for  voltages  greater  than 5KV. These input connectors are to be provided by the customer. Resistors R1A through R1K are 10KΩ resistors connected  in  parallel  to  give  a  1K  resistance  between the  high-voltage  node  and  TP4.  A  high-voltage  jumper wire is then connected from TP4 to one of the 4 inputs (VIN1\_TP  through  VIN4\_TP)  of  the  MAX300034  DUT (U1). This jumper wire must be able to handle more than 5A of current.

<!-- image -->

Figure 1. MAX30034 EV Kit Typical Configuration

<!-- image -->

To  measure  the  current  which  flows  into  the  DUT  an inductive current probe is placed around the high-voltage jumper  wire  which  connects  TP4  to  one  of  the  DUT inputs. The voltage waveform at the input of the DUT is measured  by  connecting  an  oscilloscope  probe  to  the DUT input being tested.  In this configuration a shorting jumper is required on JVIN1 to connect TP5 to V1IN\_TP. The  length  of  time  for  a  complete  high-energy  defibrillation  pulse  event  to  dissipate  is  typically  about  35ms. The  oscilloscope  time  base  should  be  set  accordingly. The high-voltage waveform can be measured at TP3 or by  using  a  BNC  cable  connected  between  J1  and  an oscilloscope input. Figure 2 shows the clamped voltage and current at the input of the MAX30034 during a defibrillation surge event.

## Table 1. Typical Defibrillation Tester Settings

| High Voltage      | 5000V               |
|-------------------|---------------------|
| Inductor          | 500µH, 10Ω          |
| Polarity          | Postive or Negative |
| Output Resistance | 50Ω                 |

Figure 2. Clamp Voltage and Current vs. Time.

<!-- image -->

│

## MAX30034 Evaluation Kit

## Configuration for Defibrillation Tester without Internal Human Body Model

To  use  the  MAX300034  EV  kit  with  a  defibrillation  tester  that  does  not  have  an  internal  human  body  model, one  must  be  implemented  using  R4  through  R12.  For example, a customer may choose to use an Automated External  Defibrillator  (AED)  to  generate  the  defibrillation surge pulse. In this configuration, 400 joules will be delivered to the test board in about 5ms. The R4 through R12  resistor  network,  when  implemented  correctly,  will safely  dissipate  the  energy  delivered  by  the  defibrillation tester. The resistor network allows for up to 9 resistors to equally share the load and dissipate the generated heat before the next pulse occurs. For a typical implementation, consider the use of nine 100Ω, non-inductive, high-

Evaluates: MAX30034

voltage  resistors.  The  first  triplet  (R4-R6)  forms  a  33Ω resistance between the high voltage node and first intermediate node. The second triplet (R7-R9) and the third triplet  (R10-R12)  each  form  another  33Ω  of  resistance between the first to second node and second to ground node  respectively.  This  network  of  nine  100Ω  resistors combines to form a 100Ω resistance between the highvoltage node and ground node.

Assuming a maximum pulse rate of one pulse every 20 seconds the 400 Joules dissipated in each pulse requires the resistor network to be able to dissipate (400J) x (1/20 sec) = 20 Watts or 2.2 Watts in each of the nine resistors. For  a  5000V  pulse  the  voltage  between  each  node  will be 1667V and resistors rated for 2000V or greater should be used.

Figure 3. MAX30034 EV Kit Human Body Model Resistor Network

<!-- image -->

Note: Applying a 400J pulse directly to the MAX30034 EV Kit without a 100Ω human body model in the circuit is not recommended.

│

## MAX30034 Leakage Current Measurement.

One purpose of this EV Kit is to demonstrate that after many high energy pulses the MAX30034 will maintain its very low leakage current. To properly measure the leakage current  of  MAX30034,  the  DUT  is  disconnect  from  the high voltage source. Leaving the high voltage source connected will result in incorrect (larger) leakage current measurements. It is necessary to remove the JVIN1 jumper between TP5 and V1IN\_TP to remove the 51KΩ path to ground  through  the  high  voltage  resistors.  Connect  the low (-) terminal of a source meter to the ground of the test board and the high (+) terminal to one of the MAX30034

Evaluates: MAX30034

input  test  points  (V1IN\_TP  -  V4IN\_TP).  Set  the  source meter  output  voltage  to  +5.000V  and  read  the  leakage current  indicated  on  the  meter.  The  leakage  current  is typically about 3pA at this voltage. If the voltage is set to -5.000V, the leakage current will also be about 3pA. There is usually a 1 or 2pA difference in leakage current when changing polarity across the input.

When making leakage current measurement immediately after a high-energy pulse, the leakage current can be 50 to 100pA.  After a few minutes, the device will recover to it typical leakage current of about 3pA.

Figure 4. MAX30034 EV Kit Leakage Current Measurement.

<!-- image -->

Note: Board cleanliness is paramount, both to protect against failures and to get the correct leakage values. If in doubt, clean, and bake the board to dry it completely. Entire board may be immersed in sonic sink for both wash and rinse cycles, bake completely dry. Handle by edges or with clean gloves.

│

## MAX30034 Evaluation Kit

## Table 2. Connectors

| NAME   | DESCRIPTION                            |
|--------|----------------------------------------|
| J1     | 1000:1 high voltage output. 1V = 1000V |
| JVIN1  | Jumper to connect TP5 to VIN1          |
| JVIN2  | Jumper to connect TP6 to VIN2          |
| JVIN3  | Jumper to connect TP7 to VIN3          |
| JVIN4  | Jumper to connect TP8 to VIN4          |

## Table 3. Test Points

| NAME    | DESCRIPTION                                          |
|---------|------------------------------------------------------|
| TP1     | High-voltage input from high-voltage pulse generator |
| TP2     | Ground return to high-voltage pulse generator        |
| TP3     | 1000:1 high voltage output. 1V = 1000V               |
| TP4     | IEC60601-2-27 compliant input to DUT                 |
| TP5     | Clamp input 1 when JVIN1 jumper installed            |
| TP6     | Clamp input 2 when JVIN2 jumper installed            |
| TP7     | Clamp input 3 when JVIN3 jumper installed            |
| TP8     | Clamp input 4 when JVIN4 jumper installed            |
| VIN_TP  | High voltage node test point                         |
| VIN1_TP | MAX30034 clamp 1 input, U1-P1                        |
| VIN2_TP | MAX30034 clamp 2 input, U1-P4                        |
| VIN3_TP | MAX30034 clamp 3 input, U1-P5                        |
| VIN4_TP | MAX30034 clamp 4 input, U1-P8                        |

│

Evaluates: MAX30034

## MAX30034 Evaluation Kit

## MAX30034 EV Bill of Materials

| PART                                             |   QTY | DESCRIPTION                                                                                                            |
|--------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------|
| GND, VIN                                         |     2 | CONNECTOR;MALE;THROUGHHOLE;HIGHPOWERPCBSERIES45AMP;STRAIGHT;1PIN                                                       |
| GND1-GND4                                        |     4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
| J1                                               |     1 | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                             |
| JVIN1-JVIN4                                      |     4 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                              |
| R1A, R1B, R1C, R1D, R1E, R1F, R1G, R1H, R1J, R1K |    10 | RESISTOR; THROUGH HOLE-RADIAL LEAD; 10K OHM; 1%; 100PPM; 1W; THICK FILM                                                |
| R2, R13                                          |     2 | RESISTOR; THROUGH HOLE-RADIAL LEAD; 100K OHM; 1%; 100PPM; 1W; THICK FILM                                               |
| R3                                               |     1 | RESISTOR; 2512; 49.9 OHM; 0.1%; 25PPM; 2.5W; THIN FILM                                                                 |
| TP3, VIN_TP, VIN1_TP-VIN4_TP                     |     6 | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                     |
| HOUSING1                                         |     1 | CONNECTOR; FEMALE; RED; THROUGH HOLE; POWERPOLE CONNECTOR; STRAIGHT; 1PIN                                              |
| HOUSING2                                         |     1 | CONNECTOR; FEMALE; WHITE; THROUGH HOLE; POWERPOLE CONNECTOR; STRAIGHT; 1PIN                                            |
| MTH1-MTH4                                        |     4 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON         |
| R4-R12                                           |     0 | RESISTOR; THROUGH HOLE-AXIAL LEAD; 100 OHM; 10%; -1300PPM; 2W; CE- RAMIC COMPOSITION                                   |
| PCB                                              |     1 | PCB Board:MAX3003X EVALUATION KIT                                                                                      |

Evaluates: MAX30034

## MAX30034 EV PCB Layout

Top Silkscreen

<!-- image -->

Top

<!-- image -->

Bottom Silkscreen

<!-- image -->

Bottom

<!-- image -->

│

## MAX30034 EV Schematic

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX30034EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX30034

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX30034