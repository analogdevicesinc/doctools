<!-- lastmod 2022-08-02 -->
## MAX9994 Evaluation Kit

## General Description

The MAX9994 evaluation kit (EV kit) simplifies the evalua -tion of the MAX9994 UMTS, DCS, and PCS base-station downconversion mixer. It is fully assembled and tested at the factory. Standard 50Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench.

This document provides a list of test equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a bill of materials (BOM) for the kit, and artwork for each layer of the PC board.

Contact  MaximDirect  sales  at  888-629-4642  for  pricing and availability on these kits.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                           |
|--------------------------|-------|-----------------------------------------------------------------------|
| C1                       |     1 | 4.0pF ±0.25pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H4R0C |
| C2, C6, C7, C8, C10, C12 |     6 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J     |
| C3, C5, C9, C11          |     4 | 0.01μF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K  |
| C4                       |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H100J      |
| C13, C14                 |     2 | 150pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H151J    |

Evaluates: MAX9994

## Features

- Fully Assembled and Tested
- 1700MHz to 2200MHz RF Frequency
- 1400MHz to 2000MHz LO Frequency
- 40MHz to 350MHz IF Frequency
- 8.3dB Conversion Gain
- 26.2dBm IIP3
- 9.7dB Noise Figure
- Integrated LO Buffer
- Switch-Selectable (SPDT), Two LO Inputs
- -3dBm to +3dBm LO Drive
- 45dB LO1 to LO2 Isolation
- 50Ω SMA Connectors on Input and Output Ports
- 4:1 Balun for Single-Ended IF Output

## Ordering Information

| PART          | TEMP RANGE             | PIN-PACKAGE     |
|---------------|------------------------|-----------------|
| MAX9994EVKIT# | T C = -40°C to +85°C** | 20 Thin QFN-EP* |

*EP = Exposed paddle.

**TC = Case temperature.

#Denotes RoHS compliance with exemption.

| DESIGNATION    |   QTY | DESCRIPTION                                                                 |
|----------------|-------|-----------------------------------------------------------------------------|
| C15            |     1 | 150pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRP1555C1H151J           |
| J1, J2, J3, J4 |     4 | PC board edge-mount SMARF connectors (flat-tab launch) Johnson 142-0741-856 |
| L1, L2         |     2 | 470nH ±5% wire-wound inductors (0805) Coilcraft 0805CS-471X_E_              |
| L3             |     1 | 10nH ±5% wire-wound inductor (0603) Coilcraft 0603CS-10NXJBC                |
| R1             |     1 | 806Ω±1% resistor (0603) Any                                                 |

<!-- image -->

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R2            |     1 | 549Ω ±1% resistor (0603) Any                                                                                                                                                                                                      |
| R3            |     1 | 7.15Ω ±1% resistor (1206) Digi-Key 311-7.15FCT-ND                                                                                                                                                                                 |
| R4            |     1 | 47kΩ ±5% resistor (0603)                                                                                                                                                                                                          |
| T1            |     1 | 4:1 transformer (200:50) Mini Circuits TC4-1W-7A                                                                                                                                                                                  |
| TP1           |     1 | Large test point for 0.062in PC board (red)                                                                                                                                                                                       |
| TP2           |     1 | Large test point for 0.062in PC board (black)                                                                                                                                                                                     |
| TP3           |     1 | Large test point for 0.062in PC board (white)                                                                                                                                                                                     |
| U1            |     1 | Active mixer IC (5mm x 5mm, 20-pin QFN, EP) Maxim MAX9994ETP NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE CIRCUIT BOARD TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN. |

## Quick Start

The MAX9994 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX9994. It is intended as a guide only, and substitutions may be possible:

- One  DC  supply  capable  of  delivering  +5.0V  and 300mA
- Two RF signal generators capable of delivering 10dBm of output power in the 1GHz to 3GHz frequency range (i.e., HP 8648)
- One RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range (HP 8561E)
- One RF power meter (HP 437B)
- One power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to  prevent  damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This procedure is specific to operation in the U.S. PCS band (reverse channel: 1850MHz to 1910MHz), low-side injected LO for a 200MHz IF. Choose the test frequency based  on  the  particular  system's  frequency  plan,  and adjust the following procedure accordingly. See Figure 1 for the mixer test setup diagram:

- 1) Calibrate  the  power  meter  for  1700MHz.  For  safety  margin,  use  a  power  sensor  rated  to  at  least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to the DUT ends of each of the two  RF  signal  generators'  SMA  cables.  This  padding improves VSWR and reduces the errors due to mismatch.
- 3) Use the power meter to set the RF signal generators according to the following:
- RF  signal  source:  -5dBm  into  DUT  at  1900MHz (this will be about -2dBm before the 3dB pad).
- LO1  signal  source:  0dBm  into  DUT  at  1700MHz (this will be about 3dBm before the 3dB pad).
- LO2  signal  source:  0dBm  into  DUT  at  1701MHz (this will be about 3dBm before the 3dB pad).
- 4) Disable the signal generator outputs.
- 5) Connect the RF source (with pad) to RFIN.
- 6) Connect the LO1 and LO2 signal sources to the EV kits LO1 and LO2 inputs, respectively.
- 7) Measure loss in 3dB pad and cable that will be connected to IFOUT. Losses are frequency dependent, so test  this  at  200MHz  (the  IF  frequency).  Use  this loss as an offset in all output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's IFOUT connector and connect a cable from the pad to the spectrum analyzer.
- 9) Set  DC  supply  to  +5.0V,  and  set  a  current  limit  of approximately 300mA, if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable the supply. Readjust the supply to get +5.0V at the EV kit. There will be a voltage drop across the ammeter when the mixer is drawing current.
- 10)  Select LO1 by connecting LOSEL (TP3) to GND.
- 11)  Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 200MHz. The level should be  about  +0.3dBm  (8.3dB  conversion  gain,  3dB  pad loss).  There  is  also  a  tone  at  199MHz,  which  is  due  to the  LO  signal  applied  to  LO2.  The  amount  of  suppression between the 200MHz and 199MHz signals is the LO switch isolation. Note that the spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB. If accuracy is required, use the power meter to measure the absolute single-tone power level.

Disconnect  the  GND  connection  to  LOSEL.  It  is  pulled high  by  a  pullup  resistor  on  the  board,  selecting  LO2. Observe  that  the  199MHz  signal  increases  while  the 200MHz decreases. Reconfigure the test setup using a combiner or hybrid to apply two RF signals at RFIN to do a  two-tone  IP3  measurement,  if  desired.  Terminate  the unused LO input in 50Ω.

## Detailed Description

The  MAX9994  is  a  high-linearity  downconverter  integrated  with  RF  and  LO  baluns,  an  LO  buffer,  an  IF amplifier,  and  an  SPDT LO input select switch. The EV kit  circuit  consists  mostly  of  supply-decoupling  capacitors,  DC-blocking capacitors, an IF balun, and inductive chokes. The MAX9994 EV kit circuit allows for thorough analysis and a simple design-in.

## Supply-Decoupling Capacitors

Capacitors  C2,  C6,  C7,  and  C8  are  22pF  supplydecoupling capacitors used to filter high-frequency noise. Capacitors C3, C9, and C11 are larger 0.01μF used for filtering lower frequency noise on the supply.

## DC-Blocking Capacitors

The  MAX9994  has  internal  baluns  at  the  RF  and  LO inputs.  These  inputs  have  almost  0Ω  resistance  at  DC, and  so  DC-blocking  capacitors  C1,  C10,  and  C12  are used  to  prevent  any  external  bias  from  being  shunted directly to ground.

## LO Bias and IF Bias

Bias currents for the integrated IF amplifier and the LO buffer  are  set  with  resistors  R1  (806Ω,  ±1%)  and  R2 (549Ω,  ±1%),  respectively.  These  values  were  carefully chosen  during  factory  testing  for  optimum  linearity  and minimal supply current.

## Current-Limiting Resistors

Resistor  R3  is  used  for  current  limiting  at  the  supply. Resistor R3 typically dissipates 60mW.

## Tap Network

Capacitor C5 helps to terminate the second-order intermodulation products.

## LEXT

The  10nH  wire-wound  inductor,  L3,  improves  LO-to-IF and RF-to-IF isolation. If isolation is not critical, then this pin can be grounded.

## IF±

The  MAX9994  employs  a  differential  IF  output  to  offer increased IP2 system performance. The EV kit uses a 4:1 balun to transform the 200Ω differential output impedance to a 50Ω single-ended output for easy bench evaluation. Inductive  chokes  L1  and  L2  provide  DC  bias  to  the  IF output amplifier, C13 and C14 for supply filtering, and R3 for current limiting.

As the differential IF outputs are relatively high impedance (200Ω), they are more susceptible to component parasit -ics. It  is  often  good practice to relieve the ground plane directly  underneath large components to reduce associated shunt-C parasitics.

## LOSEL

The EV kit includes a 47kΩ pullup resistor for easy selec -tion  of  the  LO  port.  Providing  a  ground  at  TP3  selects LO1,  and  leaving  TP3  open  selects  LO2.  To  drive  TP3 from  an  external  source,  follow  the  limits  called  out  in the  MAX9994 device data sheet. Logic voltages should not be applied to LOSEL without the +5V supply voltage. Doing so can cause the on-chip ESD diodes to conduct and could damage the device.

## Layout Considerations

The MAX9994 evaluation board can be a guide for your board layout. Pay close attention to thermal design and close placement of components to the IC. The MAX9994 package  exposed  paddle  (EP)  conducts  heat  from  the device  and  provides  a  low-impedance  electrical  connection to the ground plane. The EP MUST be attached to  the  PC  board  ground  plane  with  a  low-thermal  and electrical impedance contact. Ideally, this is achieved by soldering  the  backside  of  the  package  directly  to  a  top metal  ground  plane  on  the  PC  board. Alternatively,  the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly below the EP. The MAX9994EV kit uses nine evenly spaced, 0.016indiameter, plated through holes to connect the EP to the lower ground planes.

## MAX9994 Evaluation Kit

Depending on the ground-plane spacing, large surfacemount pads in the IF path may need to have the ground plane  relieved  under  them  to  reduce  parasitic  shunt capacitance.

## Modifying the EV Kit

The RF and LO inputs are broadband matched, so there is  no need to modify the circuit for use anywhere in the 1700MHz to 2200MHz RF range (1400MHz to 2000MHz LO range).

Retuning for a different IF is as simple as scaling the values of the IF pullup inductors up or down with frequency. The IF output looks like 200Ω differential in parallel with a  capacitor.  The  capacitance  is  due  to  the  combination  of  the  IC,  PC  board,  and  external  IF  components.

## Component Suppliers

| SUPPLIER      | PHONE        | WEBSITE                   |
|---------------|--------------|---------------------------|
| Coilcraft     | 800-322-2645 | www.coilcraft.com         |
| Digi-Key      | 800-344-4539 | www.digikey.com           |
| Johnson       | 507-833-8822 | www.johnsoncomponents.com |
| Mini-Circuits | 718-934-4500 | www.minicircuits.com      |
| Murata        | 770-436-1300 | www.murata.com            |

Note: Indicate that you are using the MAX9994 when contacting these component suppliers.

## Evaluates: MAX9994

The  capacitance  from  the  IC  is  approximately  2pF  to ground (1pF differential) while that from the PC board and external components is approximately 0.75pF to ground. The total 2.75pF of capacitance is resonated out at the frequency  of  interest  by  bias  inductors  L1  and  L2.  To determine the inductor value use the following equation:

<!-- formula-not-decoded -->

The  IF  output  is  tuned  for  operation  at  approximately 140MHz, so a 470nH inductor is used. For lower IF frequency (i.e., larger component values), maintain the component's Q value at the cost of larger case size, unless it is unavoidable.

│

## Evaluates: MAX9994

Figure 1. Test Setup Diagram

<!-- image -->

Figure 2. MAX9994 EV Kit Schematic

<!-- image -->

Figure 3. MAX9994 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 4. MAX9994 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

## Evaluates: MAX9994

Figure 5. MAX9994 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

Figure 6. MAX9994 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

│

Figure 7. MAX9994 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 8. MAX9994 EV Kit PC Board Layout-Bottom Layer (Metal)

<!-- image -->

## Evaluates: MAX9994

Figure 9. MAX9994 EV Kit PC Board Layout- Bottom Soldermask

<!-- image -->

Figure 10. MAX9994 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

## MAX9994 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 11/04           | Initial Release                                 | -               |
|                 1 | 1/21            | Updated Ordering Information and Component List | 1, 2            |
|                 2 | 3/21            | Updated Ordering Information                    | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX9994