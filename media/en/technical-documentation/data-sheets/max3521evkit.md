<!-- lastmod 2022-08-02 -->
## MAX3521 Evaluation Kit

## General Description

The MAX3521 evaluation kit (EV kit) simplifies the testing and  evaluation  of  the  MAX3521  DOCSIS  3.0  upstream amplifier. The EV kit is fully assembled and tested at the factory.  Standard  50Ω  SMA  connectors  are  included  on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This  document  provides  a  list  of  equipment  required  to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a list of components for the EV kit, and artwork for each layer of the PCB.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| B1, B2        |     2 | Ferrite beads (0805) Murata BLM21AG601SN1                    |
| B3            |     1 | Ferrite bead 1206, Murata BLM31PG121SN1                      |
| C1-C4, C8     |     5 | 0.01µF ±10% ceramic capacitors (0603) Murata GRM188R71H103K  |
| C5, C9        |     2 | 5.6pF ±0.1pF ceramic capacitors (0603) Murata GRM1885C1H5R6B |
| C6            |     1 | 10µF ±10% ceramic capacitor (0805) Murata GRM21BR61A106K     |
| C7            |     1 | 0.1µF ±10% ceramic capacitor (0402) Murata GRM155R71A104K    |
| C10, C11      |     2 | 10pF ±5% ceramic capacitors (0603) Murata GRM1885C1H100J     |
| JP2           |     1 | 20-pin (2 x 10) dual inline header Sullins PEC36DAAN         |

## Features

- Easy Evaluation of the MAX3521
- 50Ω SMA Connectors
- All Critical Peripheral Components Included
- Proven PCB Layout
- Fully Assembled and Tested
- PC Control Software (Available at www.maximintegrated.com )

Ordering Information appears at end of data sheet.

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JP3 (+5V)     |     1 | PC mini red test point Keystone 5000                          |
| JP4 (GND)     |     1 | PC mini black test point Keystone 5001                        |
| R1            |     1 | 100kΩ ±5% resistor (0603)                                     |
| R2, R6        |     2 | 100Ω ±1% resistors (0603)                                     |
| R3            |     1 | 43.2Ω ±1% resistor (1206)                                     |
| R4            |     1 | 86.6Ω ±1% resistor (1206)                                     |
| R5, R7        |     2 | 37.4Ω ±1% resistors (0603)                                    |
| RFIN, RFOUT   |     2 | SMAend-launch jack receptacles Emerson (Johnson) 142-0701-801 |
| T1            |     1 | 1:4 transformer TOKO 617PT-1664                               |
| T2            |     1 | 1:2 transformer TOKO 617PT-2270                               |
| U1            |     1 | DOCSIS 3.0 upstream amplifier (20 TQFN-EP*) Maxim MAX3521ETP+ |
| -             |     1 | PCB: MAX3521 EVALUATION KIT#                                  |

Evaluates: MAX3521

<!-- image -->

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                     |
|----------------------------|--------------|-----------------------------|
| Emerson Network Power      | 507-833-8822 | www.emersonnetworkpower.com |
| Keystone Electronics Corp. | 800-221-5510 | www.keyelco.com             |
| Murata Americas            | 800-241-6574 | www.murataamericas.com      |
| Sullins Electronics Corp.  | 760-545-6700 | www.sullinselectronics.com  |
| TOKOAmerica, Inc.          | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX3521 when contacting these component suppliers.

## Quick Start

## Test Equipment Required

- Power supply capable of supplying at least 750mA at +5V
- Power supply capable of supplying at least 5mA at +3.3V (sets logic level on INTF3000+ interface board)
- RF  signal  generator  capable  of  delivering  at  least -10dBm  of  output  power  at  40MHz  frequency (e.g., HP8482A or equivalent)
- RF  spectrum  analyzer  capable  of  covering  the operating frequency range of the device
- Windows® PC with a spare USB port
- USB cables
- 50Ω SMA cables
- (Optional) Multichannel digital oscilloscope
- (Optional) Network analyzer to measure return loss
- (Optional) Ammeter to measure supply current

## Connections and Setup

This  section  provides  a  step-by-step  quide  to  testing  the basic functionality of the EV kit. Caution: Do not turn on DC power or RF signal generators until all connections are completed.

- 1) Verify  that  the  shunt  across  jumper  JU1  on  the INTF3000+ interface board has been removed.
- 2) Connect 20-pin header J1 on the INTF3000+ interface board to 20-pin header JP2 on the EV kit using the supplied  ribbon  cable. Note: Pin  1  of  the  interface cable corresponds to the red wire. Pin 1 is designated in the silkscreen on each of the PCBs.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

- 3) With its output disabled, set the DC power supply to +5V. Connect the power supply to the +5V (through an ammeter if desired) and GND terminals on the EV kit. If available, set the current limit to 650mA.
- 4) With  its  output  disabled,  set  the  other  DC  powersupply voltage to +3.3V. Connect the power supply to the VPULL and GND terminals on the INTF3000+ interface board.
- 5) With its output disabled, set the RF signal generator to  a  40MHz  frequency  and  a  -20dBm  power  level. Connect the output of the RF signal generator to the SMA connector labeled RFIN on the evaluation board.
- 6) Install and run the MAX3521 EV kit software, available for download HERE .
- 7) Turn  on  the  +3.3V  power  supply,  followed  by  the +5V power supply. The supply current from the +5V supply should read approximately 5mA. Be sure to adjust the power supply to account for any voltage drop across the ammeter.
- 8) Load  the  default  register  settings  from  the  control software by clicking on the Defaults button.
- 9) Connect the SMA connector labeled RFOUT on the evaluation  board  to  a  spectrum  analyzer  or  to  an oscilloscope. Set TXEN = 1. The supply current from the +5V supply should read approximately 475mA.
- 10)  Enable the RF signal generator's output. Check the output level on the spectrum analyzer or oscilloscope. Expected  power  level  is  about  +12.3dBm  under default setting
- 11) Set  the gain code  using  the  control  software. Check the output level on the spectrum analyzer or oscilloscope.

│

Evaluates: MAX3521

## Detailed Description

## Gain Calculations

The 1:4 impedance ratio transformer (T1) on the EV kit converts  the  unbalanced  50Ω  impedance  of  the  signal generator to a balanced 200Ω, matching the input of the device. T1 is included to assist in evaluation of the device using standard 50Ω lab equipment. It is not required for most applications.

A 1:4 impedance ratio corresponds to a 1:2 voltage ratio, or  6dB voltage gain. The power loss of T1, which must be included, is approximately 0.3dB across the operating frequency range of the device, giving a total voltage gain due to T1 of 5.7dB.

A  minimum  loss  pad  (MLP)  on  the  output  of  T2  transforms  the  75Ω  output  impedance  of  the  device  to  50Ω test-equipment impedance, with a voltage loss of 7.4dB. Because the 1:2 impedance ratio output transformer (T2) is required in the application, we do not include the loss in this transformer in the voltage-gain calculation.

To  calculate  the  voltage  gain  of  the  device  from  50Ω power measurements at RFIN and RFOUT on the EV kit:

AV = P OUT (dBm) + 7.4dB (MLP) - [P IN (dBm) + 5.7dB (T1)]

- = P OUT (dBm) - PIN(dBm)  + 1.7dB

## Layout Considerations

The EV kit can serve as a guide for PCB layout. Keep RF signal lines as short as possible to minimize losses and radiation. To minimize second-order distortion, traces in  the  balanced  input  and  output  circuitry  should  be as  symmetric  as  possible.  The  exposed  pad  must  be soldered  evenly  to  the  board's  ground  plane  for  proper operation. Use abundant vias beneath the exposed pad for maximum heat dissipation. Use abundant ground vias between RF traces to minimize undesired coupling.

To  minimize  coupling  between  different  sections  of  the device, the ideal power-supply layout is a star configuration, which  has  a  large  decoupling  capacitor  at  the  central VCC node. The V CC   traces  branch  out  from  this  node, with each trace going to separate V CC  pins of the device. Each  V CC   pin  must  have  a  bypass  capacitor  with  low impedance  to  ground  at  the  frequency  of  interest.  Do not share ground vias among multiple connections to the PCB ground plane.

## Evaluates: MAX3521

Figure 1. MAX3521 EV Kit Schematic

<!-- image -->

Evaluates: MAX3521

Figure 2. MAX3521 EV Kit Component Placement Guide

<!-- image -->

│

Evaluates: MAX3521

Figure 3. MAX3521 EV Kit PCB Layout-Primary Component Side

<!-- image -->

Evaluates: MAX3521

Figure 4. MAX3521 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

│

Evaluates: MAX3521

Figure 5. MAX3521 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Evaluates: MAX3521

Figure 6. MAX3521 EV Kit PCB Layout-Secondary Component Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3521EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX3521

## MAX3521 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION             | PAGES CHANGED   |
|-------------------|-----------------|-------------------------|-----------------|
|                 0 | 8/13            | Initial release         | -               |
|                 1 | 6/16            | Data sheet improvements | 2, 3            |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX3521