<!-- lastmod 2022-08-02 -->
## MAX2029 Evaluation Kit

## General Description

The  MAX2029  evaluation  kit  (EV  kit)  simplifies  the evaluation of the MAX2029 815MHz to 1000MHz RF frequency  range,  GSM/cellular  base-station  transmitter,  or receiver application MAX2029 upconversion/downconversion mixer. It is fully assembled and tested at the factory. Standard 50Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench.

This document provides a list of test equipment required to evaluate the device, a straight-forward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a bill of materials (BOM) for the kit, and images for each layer of the PC board.

## Features

- Fully Assembled and Tested
- 50Ω SMA Connectors on Input and Output Ports
- 815MHz to 1000MHz RF Frequency Range
- 570MHz to 900MHz LO Frequency Range
- 960MHz to 1180MHz LO Frequency Range (Refer to the MAX2029 Data Sheet)
- DC to 250MHz IF Frequency Range
- 6dB/6.5dB (Upconverter/Downconverter) Conversion Loss
- 36.5dBm/39dBm (Downconverter/Upconverter) Input IP3
- +25dBm/+27dBm (Upconverter/Downconverter) Input 1dB Compression Point
- 6.7dB Noise Figure
- Integrated LO Buffer
- Integrated RF and LO Baluns
- Low -3dBm to +3dBm LO Drive
- Built-In SPDT LO Switch with 43dB LO1 to LO2 Isolation and 50ns Switching Time
- External Current-Setting Resistor Provides Option for Operating Mixer in Reduced Power/Reduced Performance Mode

Ordering Information appears at end of data sheet.

## Quick Start

The MAX2029 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2029. It is intended as a guide only, and substitutions can be possible:

- DC supply capable of delivering +5.0V and 175mA
- Three RF signal generators capable of delivering 10dBm of output power in the 1GHz to 3GHz frequency range (e.g., HP 8648)
- RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range (HP 8561E)
- RF power meter (HP 437B)
- Power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to  prevent  damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This  procedure  is  specific  to  operation  in  the  GSM/cellular  band  with  a  low  side  injected  LO  for  a  90MHz  IF. Choose the test frequency based on the particular system's frequency plan and adjust the following procedure accordingly.

- 1) Calibrate the power meter for 920MHz. For a safety margin, use a power sensor rated to at least +20dBm or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to the DUT ends of each of the two RF signal generators' SMA cables. This padding improves VSWR and reduces the errors due to mismatch.

<!-- image -->

Evaluates: MAX2029

- 3) Use the power meter to set the RF signal generators according to the following:
- RF signal source: 0dBm into DUT at 920MHz (this this should be approximately +3dBm before the 3dB pad).
- LO1 signal source: 0dBm into DUT at 830MHz (this should be approximately +3dBm before the 3dB pad).
- LO2 signal source: 0dBm into DUT at 831MHz (this should be approximately +3dBm before the 3dB pad).
- 4) Disable the signal generator outputs.
- 5) Connect the RF source (with pad) to the RF port.
- 6) Connect the LO1 and LO2 signal sources to the EV kit's LO1 and LO2 inputs, respectively.
- 7) Measure the loss in the 3dB pad and cable that are going to be be connected to the IF port. Losses are frequency dependent, so test this at 90MHz (the IF frequency). Use this loss as an offset in all output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's IF port connector and connect a cable from the pad to the spectrum analyzer.
- 9) Set the DC supply to +5.0V and set a current limit around 175mA if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable and readjust the supply to get +5.0V at the EV kit. There can be a voltage drop across the ammeter when the mixer is drawing current.
- 10)  Select LO1 by connecting LOSEL (TP3) to GND.
- 11)  Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 90MHz. The level should be about -9dBm (6dB conversion loss, 3dB pad loss). The spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB; use the power meter to get an accurate output power measurement.

Disconnect the GND connection to LOSEL, it is going to be pulled high by a pullup resistor on the board to select LO2. Observe that the 91MHz signal increases while the 90MHz decreases.

Reconfigure the test setup using a combiner or hybrid to sum the two LO inputs to do a two-tone IP3 measurement if desired. Terminate the unused LO input in 50Ω.

## Detailed Description

The  MAX2029  is  a  high-linearity  upconverter/downconverter integrated with RF and LO baluns, a LO buffer, and a  SPDT LO input select switch. The EV kit circuit uses the  MAX2029 and consists mostly of supply-decoupling capacitors,  DC-blocking  capacitors,  a  current-setting resistor,  and  an  IF  balun.  The  MAX2029  EV  kit  circuit allows for thorough analysis and a simple design-in.

## Detailed Description of Hardware

## Supply-Decoupling Capacitors

Capacitors C2, C7, C8, and C11 are 82pF supply decoupling  capacitors  used  to  filter  high-frequency  noise. Capacitors C3, C6, and C9 are larger 0.01µF capacitors used for filtering lower frequency noise on the supply.

## DC-Blocking Capacitors

The  MAX2029  has  internal  baluns  at  the  RF  and  LO inputs.  These  inputs  have  almost  0Ω  resistance  at  DC, and  so  DC-blocking  capacitors  C1,  C10,  and  C12  are used  to  prevent  any  external  bias  from  being  shunted directly to ground.

## LO Bias

Bias current for the integrated LO buffer is set with resistor R1 (523Ω ±1%). The DC current of the device can be reduced  by  increasing  the  value  of  R1,  but  the  device would  operate  at  reduced  performance  levels  (see  the Modifying the EV Kit section).

## Tap Network

Capacitor C5 helps to terminate the second-order intermodulation products.

## IF±

The MAX2029 mixer has an IF frequency range of DC to 250MHz. Note  that  these  differential  ports  are  ideal  for providing  enhanced  IIP2  performance.  Single  ended  IF applications require a 1:1 balun to transform the 50Ω dif -ferential output impedance to a 50Ω single ended output. After  the  balun,  the  IF  return  loss  is  better  than  15dB. The differential IF is used as an input port for upconverter operation.  The  user  can  use  a  differential  IF  amplifier following  the  mixer,  but  a  DC  block  is  required  on  both IF  pins.  In  this  configuration,  the  IF+  and  IF-  pins  need to be returned to ground through high resistance (about

## MAX2029 Evaluation Kit

1kΩ).  This  ground  return  can  also  be  accomplished  by grounding the RF tap (pin 3) and AC-coupling the IF+ and IF- ports (pins 19 and 18).

## LOSEL

The EV kit includes a 47kΩ pullup resistor (R2) for easy selection  of  the  LO  port.  Providing  a  ground  at  TP3 selects LO1 and leaving TP3 open selects LO2. To drive TP3 from an external source, follow the limits called out in the MAX2029 device data sheet. Logic voltages should not be applied to LOSEL without the +5V supply voltage. Doing so can cause the on-chip ESD diodes to conduct and could damage the device.

## Layout Considerations

The MAX2029 evaluation board can be a guide for the board layout. Pay close attention to thermal design and close placement of components to the IC. The MAX2029 package  exposed  paddle  (EP)  conducts  heat  from  the device and provides a low-impedance electrical connection to the ground plane. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance  contact.  Ideally,  this  is  achieved  by  soldering  the  backside  of  the  package  directly  to  a  top  metal

## Component List

| PART                          |   QTY | DESCRIPTION                                                           |
|-------------------------------|-------|-----------------------------------------------------------------------|
| C1, C2, C7, C8, C10, C11, C12 |     7 | 82pF ±5% 50V C0G CER CAP (0603) Murata: GRM1885C1H820J                |
| C3, C6, C9                    |     3 | 0.01µF ±10% 50V X7R CER CAP (0603) Murata: GRM188R71H103K             |
| C5                            |     1 | 3.3pF ±0.1pF 50V C0G CER CAP (0603) Murata: GRM1885C1H3R3B            |
| C4                            |     0 | Not Installed                                                         |
| L1                            |     0 | Not Installed                                                         |
| R1                            |     1 | 523Ω ± 1% Resistor (0603) Any, Lead-free only                         |
| R2                            |     1 | 47kΩ ± 5% Resistor (0603) Any, Lead-free only                         |
| J1, J2, J3, J4                |     4 | PCB Edge Mount SMARF Connector (Flat tab launch) Johnson: 142-0741-85 |
| T1                            |     1 | 1:1 Transformer (50:50) M/A-COM: MABAES0029                           |

ground plane on the PC board. Alternatively, the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly below the EP. The MAX2029 EV kit uses nine evenly spaced 0.016in diameter, plated-through holes to connect the EP to the lower ground planes.

Depending on the ground-plane spacing, large surfacemount pads in the IF path might need to have the ground plane  relieved  under  them  to  reduce  parasitic  shunt capacitance.

## Modifying the EV Kit

The  RF,  LO,  and  IF  ports  are  broadband  matched,  so there is no need to modify the circuit for use anywhere in the 815MHz to 1000MHz RF range, 570MHz to 900MHz LO range, and DC to 250MHz IF range.

The DC current of the device can be lowered if reduced performance  is  acceptable.  Reducing  the  current  is accomplished  by  increasing  the  value  of  R1.  Doubling the value of R1 reduces the DC current approximately by half. Approximately 10% of the overall IC current is used for  basic  operation  of  the  device  (R1  set  at  523Ω)  and cannot be reduced.

| PART   |   QTY | DESCRIPTION                                                                                                                                                                                                                      |
|--------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U1     |     1 | Active Mixer IC (5x5mm QFN20 exp paddle) Maxim: MAX2029ETP+ NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR WHICH REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE CIRCUIT BOARD TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN |
| TP1    |     1 | Large Test Point for 0.062' PCB (Red) Kobiconn: 151-107-RC Mouser: 151-107-R                                                                                                                                                     |
| TP2    |     1 | Large Test Point for 0.062' PCB (Black) Kobiconn: 151-103-RC Mouser: 151-103-RC                                                                                                                                                  |
| TP3    |     1 | Large Test Point for 0.062' PCB (White) Kobiconn: 151-101-RC Mouser: 151-101-R                                                                                                                                                   |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| M/A-Com    | 800-366-2266 | www.macom.com             |
| Murata     | 770-436-1300 | www.murata.com            |

Note:

Indicate that you are using the MAX2029 when contacting these component suppliers.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2029EVKIT# | EV KIT |

Evaluates: MAX2029

│

## MAX2029 EV Kit Schematic

<!-- image -->

Evaluates: MAX2029

## MAX2029 EV Kit PCB Layout

MAX2029 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX2029 EV Kit PCB Layout-Top Mask

<!-- image -->

Evaluates: MAX2029

MAX2029 EV Kit PCB Layout-Top View

<!-- image -->

MAX2029 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX2029 EV Kit PCB Layout (continued)

MAX2029 EV Kit PCB Layout-Layer 3

<!-- image -->

MAX2029 EV Kit PCB Layout-Bottom View

<!-- image -->

Evaluates: MAX2029

MAX2029 EV Kit PCB Layout-Bottom Mask

<!-- image -->

MAX2029 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX2029