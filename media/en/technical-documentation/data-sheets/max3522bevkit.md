<!-- lastmod 2022-08-03 -->
## MAX3522B Evaluation Kit

## General Description

The  MAX3522B  evaluation  kit  (EV  kit)  simplifies  the testing  and  evaluation  of  the  MAX3522B  DOCSIS  3.1 upstream  amplifier.  The  EV  kit  is  fully  assembled  and tested at the factory. Standard 50Ω SMA connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This  document  provides  a  list  of  equipment  required  to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a list of components for the EV kit, and artwork for each layer of the PCB.

## Features

- Easy Evaluation of the MAX3522B
- 50Ω SMA Connectors
- All Critical Peripheral Components Included
- Reference Design Ready Layout
- Fully Assembled and Tested
- PC Control Software (Available at www.maximintegrated.com )

Ordering Information appears at end of data sheet.

Evaluates: MAX3522B

## Quick Start

## Required Equipment

- MAX3522B EV Kit Board (included)
- One power supply capable of supplying at least 2000mA at +5V
- One RF signal generator capable of delivering at least -10dBm of output power at up to 204MHz frequency (HP8482A or equivalent)
- One RF spectrum analyzer capable of covering the operating frequency range of the device
- One Windows PC with available USB port
- Two 50Ω SMA cables
- Mini-USB type A-to-type B cable
- (Optional) One network analyzer to measure return loss
- (Optional) One ammeter to measure supply current

## Procedure

This section provides a step-by-step guide to testing the basic functionality of the EV kit.

- 1) With its output disabled, set the DC power supply to +5V. If available, set the power supply's current limit to  2000mA.  Connect  the  power  supply  to  the  +5V (through an ammeter if desired) and GND terminals on the EV kit, as shown in Figure 1.
- 2) With its output disabled, set the RF signal generator to  85MHz  and  a  power  level  of  -20dBm.  Connect the  output  of  the  RF  signal  generator  to  the  SMA connector labeled J1 RF IN on the evaluation board, as shown in Figure 1.
- 3) Connect the SMA connector labeled J2 RFOUT1 or J3 RFOUT2 on the evaluation board to a spectrum analyzer, as shown in Figure 1.
- 4) Connect the USB cable from FT4232 module's USB mini-B port to PC USB port, as shown in Figure 1.
- 5) Download the MAX3522B control software (MAX3522\_SetupXXXX.zip),  at https://www.maximintegrated.com/en/design/tools/applications/ evkit-software
- 6) Extract the zip file and run the installation file.

<!-- image -->

## MAX3522B Evaluation Kit

- 7) Turn on the +5V power supply.
- 8) Run MAX3522.exe. MAX3522B  GUI  should be launched  as  shown  in  Figure  2 .  Please  notice  that the sequence of first turning on the power supply then starting  the  GUI  is  very  important.  This  sequence ensures proper initialization of the MAX3522B. If the setup  is  successful,  GUI  should  indicate  'interface connected', in the lower right corner of the GUI (see Figure 2).
- 9) On  the  MAX3522B  GUI,  hit  Refresh  ROM  button, located in the upper portion of the GUI (see Figure 2).
- 10)  On the MAX3522B GUI, set Power Code = 3, Gain Code = 63, (located in the upper-left section of the GUI) by using the up/down arrow buttons or typing the value (see Figure 2).
- 11) On  the  MAX3522B  GUI,  Turn  on  the  TX\_ENABLE switch  (see  Figure  2 ).  The  supply  current  from  the +5V supply should read approximately 1100 mA. Be sure  to  adjust  the  power  supply  to  account  for any voltage drop across the ammeter.
- 12)  Depending on which output SMA is connected, user needs  to  set  PASELECT  bit  accordingly.  On  the MAX3522B GUI, click 01 CTRL and then set PASELECT (see Figure 3 ) by clicking the register value (default = 0b). PASLECT = 0 enables OUTPUT1 (J2), PASLECT =  1 enables OUTPUT2 (J3).
- 13) Enable the RF signal generator's output.
- 14)  Check  the  output  level  on  the  spectrum  analyzer. Expected power level is about -7dBm at 85MHz.

Figure 1. EV Kit Hardware Setup

<!-- image -->

│

Figure 2. EV Kit GUI Register00

<!-- image -->

Figure 3. EV Kit GUI Register01

<!-- image -->

## Detailed Description of Hardware (or Software)

## Gain Calculation

A minimum loss pad (MLP R18/R17) after the input port (J1)  transforms  the  50Ω  test  equipment  impedance  to 100Ω input transformer (T3) impedance, with a voltage loss of  4.7dB. T3 converts the unbalanced 100Ω impedance to  a  balanced  100Ω,  matching  the  overall  impedance of  input  of  the  MAX3522B  (200Ω)  paralleled  with  200Ω resistor (R12 + R13). The power loss of T3 is approximately 0.5dB  across  the  operating  frequency  range  of  the MAX3522B. So the total voltage loss due to T3 and MLP (R17/R18 ) is 5.2 dB.

T3 and MLP (R17/R18 ) are included to assist in evaluation of the IC using standard 50Ω lab equipment. They are not required for most applications.

The 1:4 impedance output transformer (T1 or T2) provides 6dB voltage gain, which is included in overall MAX3522B voltage gain specified in the IC data sheet.

A  minimum  loss  pad  (MLP  R5/R6  or  R7/R8)  after  the output of T1 or T2 transforms the 75Ω output impedance of  the  T1/T2  to  50Ω  test  equipment  impedance,  with  a voltage loss of 7.5dB. To calculate the voltage gain of the MAX3522B between J1 and J2 or between J1 and J3:

Voltage Gain =   POUT(dBm) + 7.5dB (MLP) - [PIN(dBm) - 5.2dB (T3/MLP)]

= POUT(dBm) - PIN(dBm) + 12.7dB

The voltage gain should be between 24.2dB and 26.2dB under gain code 63.

## Component Suppliers

| SUPPLIER                   | WEBSITE                     |
|----------------------------|-----------------------------|
| Emerson Network Power      | www.emersonnetworkpower.com |
| Keystone Electronics Corp. | www.keyelco.com             |
| Murata Americas            | www.murata.com              |
| MACOM                      | www.macom.com               |

│

## Evaluates: MAX3522B

## Layout Considerations

The MAX3522B is a high-performance RF amplifier. PCB layout  and  external  component  selection  is  critical  to achieve specified performance. We strongly recommend the user to follow the EV kit PCB layout, including number and  placement  of  ground  throughputs,  internal  layer geometry,  and  component  size,  as  closely  as  possible. Keep  RF  signal  lines  as  short  as  possible  to  minimize losses and radiation. This is especially true for the output traces between the MAX3522B and transformers T1/T2.

To minimize second-order distortion, traces in the balanced input  and  output  circuitry  should  be  as  symmetric  as possible.  The  exposed  pad  must  be  soldered  evenly to  the  board's  ground  plane  for  proper  operation.  Use abundant  throughputs  beneath  the  exposed  pad,  and surrounding  area  for  maximum  heat  dissipation.  Use abundant  ground  throughputs  between  RF  traces  to minimize undesired coupling.

To  minimize  coupling  between  different  sections  of  the device, the ideal power-supply layout is a star configuration, which  has  a  large  decoupling  capacitor  at  the  central VCC node. The V CC traces  branch  out  from  this  node, with each trace going to separate V CC  pins of the device. Each  V CC pin  must  have  a  bypass  capacitor  with  low impedance  to  ground  at  the  frequency  of  interest.  Do not share ground vias among multiple connections to the PCB ground plane.

## MAX3522B Evaluation Kit

## MAX3522B EV Kit Bill of Materials

<!-- image -->

| Description   | FERRITE-BEAD (0805) MURATA BLM21AG601SN1D FERRITE-BEAD(1206) MURATA BLM31PG121SN1   | C13 8 0.01 μ F ±10% ceramic capacitors (0603) MURATA GRM188R71C103KA01 1 10 μ F ±10% ceramic capacitors (0805) MURATA GRM21BR71A106KE51   | 2 6.8pF ±0.25PF ceramic capacitors (0603) MURATA GRM39C0G6R8C050   | 2 12pF ±0.25PF ceramic capacitors (0603) MURATA GRM1885C1H120FZ01 1 5.6PF ±0.25PF ceramic capacitors (0603) MURATA GRM1885C1H5R6CA01   | SMA end-launch jack receptacles Emerson JOHNSON COMPONENTS 142-0701-801 3   | 1 2X 13 FEMALE HEADERS and FUTURE TECHNOLOGY DEVICES INTL LTD, FT4232H_MINI_MODULE   | 2 PC mini red test point KEYSTONE 5000   | 3 PC mini black test point KEYSTONE 5001   | PC mini yellow test point KEYSTONE 5004   | 47nH ±5% ceramic chip inductor (0603)   | 2 2 33nH ±2% wire wound chip inductor (0603)   | 100K Ω ±5% resistor (0603)   | 1         | 2 33.2 Ω ±1% resistor (0805) 2 43.2 Ω ±1% resistor(1206)   | 2 86.6 Ω ±1% resistor(1206) 1 0 Ω resistor (0603)   | 2 100 Ω ±1% resistor (0603)   | 10K Ω ±1% resistor (0603)   | 71.5 Ω ±1% resistor (0603)   | 1:4 transformer MACOM MABA-011061 1:1 transformer MACOM MABA-011026   | DOCSIS 3.1 upstream amplifier (56L TQFN) MAXIM MAX3522BCTN+   | PCB: MAX3522B EVALUATION KIT#   | Mini-USB type A-to-type B cable   |
|---------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|------------------------------------------|--------------------------------------------|-------------------------------------------|-----------------------------------------|------------------------------------------------|------------------------------|-----------|------------------------------------------------------------|-----------------------------------------------------|-------------------------------|-----------------------------|------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------|---------------------------------|-----------------------------------|
| Qty           | Designation B1, B2 2 B3, B4 2                                                       | C1-C3, C5, C7, C8, C10, C6                                                                                                                | C14, C15 C16, C17                                                  | C18                                                                                                                                    | J1-J3                                                                       | J4                                                                                   | JP3, JP5                                 | JP4, JP6, JP7                              | TP1-TP3, TP8 3                            | L1, L2                                  | L3, L4                                         | R4                           | R2 R5, R7 | R3,                                                        | R6, R8 R9 R12, R13                                  | R15, R16 2                    | R17, R18 2                  | T1, T2 2                     | T3 1                                                                  | U1 1                                                          | - 1                             | - 1                               |

Evaluates: MAX3522B

## MAX3522B EV Kit Schematic

<!-- image -->

## MAX3522B EV Kit PCB Layout Diagrams

MAX3522B EV Kit-Top Silkscreen

<!-- image -->

MAX3522B EV Kit-Internal 2

<!-- image -->

MAX3522B EV Kit-Top

<!-- image -->

MAX3522B EV Kit-Internal 3

<!-- image -->

│

## MAX3522B EV Kit PCB Layout Diagrams

MAX3522B EV Kit-Bottom Mask

<!-- image -->

MAX3522B EV Kit-Bottom

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX3522BEVKIT# | EV Kit |

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX3522B