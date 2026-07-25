<!-- lastmod 2022-08-04 -->
## General Description

The MAX2031 evaluation kit (EV kit) simplifies the evaluation  of  the  MAX2031 WCDMA, cdma2000 ® , GSM, and WiMAX (SM) base-station up/downconversion mixer. It is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench.

This document provides a list of test equipment required to evaluate the device, a straightforward test procedure to  verify  functionality,  a  description  of  the  EV  kit  circuit, the circuit schematic, a bill of materials (BOM) for the kit, and artwork for each layer of the PC board.

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE      |
|--------------|----------------|-----------------|
| MAX2031EVKIT | -40°C to +85°C | 20 Thin QFN-EP* |

WiMAX is a service mark of Broadband.com, Inc.

cdma2000is a registered trademark of Telecommunications Industry Association.

| DESIGNATION                   |   QTY | DESCRIPTION                                                                                                             |
|-------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C7, C8, C10, C11, C12 |     7 | 82pF ±5% 50V C0G ceramic capacitors (0603) Murata GRM1885C1H820J                                                        |
| C3, C6, C9                    |     3 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K                                                    |
| C4                            |     1 | 6.0pF ±0.25pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H6R0C (used for upconverter operation)                  |
| C5                            |     0 | 2.0pF ±0.1pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H2R0B ( not installed -used for downconverter operation) |
| J1-J4                         |     4 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856                                            |
| L1                            |     1 | 4.7nH ±0.3nH inductor (0603) TOKO LL1608-FS4N7S (used for upconverter operation)                                        |
| R1                            |     1 | 523 Ω ±1% resistor (0603)                                                                                               |

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ 50 Ω SMA Connectors on Input and Output Ports
- ♦ 815MHz to 1000MHz RF Frequency Range
- ♦ 960MHz to 1180MHz LO Frequency Range
- ♦ DC to 250MHz IF Frequency Range
- ♦ 7dB Conversion Loss
- ♦ +36dBm Input IP3
- ♦ +27dBm Input 1dB Compression Point
- ♦ 7dB Noise Figure
- ♦ Integrated LO Buffer
- ♦ Integrated RF and LO Baluns
- ♦ Low -3dBm to +3dBm LO Drive
- ♦ Built-In SPDT LO Switch with 49dB LO1 to LO2 Isolation and 50ns Switching Time
- ♦ External Current-Setting Resistor Provides Option for Operating Mixer in Reduced Power/Reduced Performance Mode

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R2            |     1 | 47k Ω ±5% resistor (0603)                                                                                                                                                                                                                        |
| T1            |     1 | 1:1 transformer (50:50) M/A-COM MABAES0029                                                                                                                                                                                                       |
| TP1           |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent                                                                                                                                                                         |
| TP2           |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent                                                                                                                                                                       |
| TP3           |     1 | Large test point for 0.062in PC board (white) Mouser 51-101 or equivalent                                                                                                                                                                        |
| U1            |     1 | Active mixer IC (5mm x 5mm 20-pin thin QFN exposed paddle) Maxim MAX2031ETP NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE CIRCUIT BOARD TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2031 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE          | WEBSITE                   |
|------------|----------------|---------------------------|
| Johnson    | 507-833-8822   | www.johnsoncomponents.com |
| M/A-Com    | 1-800-366-2266 | www.macom.com             |
| Murata     | 770-436-1300   | www.murata.com            |

Note: Indicate that you are using the MAX2031 when contacting these manufacturers.

## Quick Start

The MAX2031 EV kit is factory configured as an upconverter and tuned for an 810MHz RF frequency. This is accomplished by including components L1 and C4 on the PC board (see the Modifying the EV Kit section for details.

The MAX2031 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the recommended test equipment to verify  the  operation of the MAX2031. It is intended as a guide only, and substitutions may be possible.

- One DC supply capable of delivering +5.0V and 150mA
- Three RF signal generators capable of delivering 10dBm of output power in the 100MHz to 1GHz frequency range (i.e., HP 8648)
- One RF spectrum analyzer with a 100kHz to 3GHz minimum frequency range (HP 8561E)
- One RF power meter (HP 437B)
- One power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This procedure is specific to operation in the cellular band high-side-injected LO for upconverter operation to  an  810MHz RF signal. Choose the test frequency based on the particular system's frequency plan, and adjust the following procedure accordingly. See Figure 1 for the mixer test setup diagram.

- 1) Calibrate the power meter. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to DUT ends of each of the two RF signal generators' SMA cables. This padding

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

improves VSWR, and reduces the errors due to mismatch.

- 3) Use the power meter to set the signal generators according to the following:
- IF signal source: 0dBm into DUT at 160MHz (approximately 3dBm before the 3dB pad)
- LO1 signal source: 0dBm into DUT at 970MHz (approximately 3dBm before the 3dB pad)
- LO2 signal source: 0dBm into DUT at 969MHz (approximately 3dBm before the 3dB pad)
- 4) Disable the signal generator outputs.
- 5) Connect the IF source (with pad) to the IF port.
- 6) Connect the LO1 and LO2 signal sources to the EV kit LO inputs.
- 7) Measure loss in the 3dB pad and cable that will be connected to the RF port. Losses are frequencydependent, so test this at 810MHz (the RF frequency).  Use  this  loss  as  an  offset  in  all  output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's RF port connector and connect a cable from the pad to the spectrum analyzer.
- 9) Set DC supply to +5.0V, and set a current limit of around 150mA if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable the supply. Readjust the supply to get +5.0V at the EV kit. There will be a voltage drop across the ammeter when the mixer is drawing current.
- 10) Select LO1 by connecting LOSEL (TP3) to GND.
- 11) Enable the LO and the RF sources.

The procedure for downconverter operation from RF to the IF band is similar to the steps listed above. For downconverter operation, connect the RF signal source (with pad) to the RF port and connect a 3dB pad and cable to the IF port from the spectrum analyzer.

<!-- image -->

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the RF output tone at 810MHz for upconverter operation. The level should be about -10dBm (7dB conversion loss, 3dB pad loss). The spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB.

Disconnect the GND connection to LOSEL. It will be pulled high by a pullup resistor on the board, selecting LO2. Observe that the 809MHz signal increases while the 810MHz decreases.

Reconfigure the test setup using a combiner or hybrid to sum two of the frequency sources to do a two-tone IP3 measurement if desired. Terminate the unused LO input in 50 Ω .

## Detailed Description

The MAX2031 is a high-linearity up/downconverter integrated with RF and LO baluns, an LO buffer, and an SPDT LO input select switch. The EV kit circuit uses the MAX2031 and consists mostly of supply-decoupling capacitors, DC-blocking capacitors, a current-setting resistor,  and  an  IF  balun.  The  MAX2031 EV kit circuit allows for thorough analysis and a simple design-in.

## Supply-Decoupling Capacitors

C2, C7, C8, and C11 are 82pF supply-decoupling capacitors used to filter high-frequency noise. C3, C6, and C9 are larger 0.01µF capacitors used for filtering lower frequency noise on the supply.

## DC-Blocking Capacitors

The MAX2031 has internal baluns at the RF and LO inputs. These inputs have almost 0 Ω resistance at DC, so DC-blocking capacitors C1, C10, and C12 are used to prevent any external bias from being shunted directly to ground.

## LO Bias

The bias current for the integrated LO buffer is set with resistor R1 (523 Ω ±1%). Increasing the value of R1 can reduce the DC current of the device but the device would operate at reduced performance levels (see the Modifying the EV Kit section).

## TAP Network

The TAP pin for the internal balun is grounded.

## IF±

The MAX2031 mixer has a DC to 250MHz IF frequency range. Note that these differential ports are ideal for providing enhanced IIP2 performance. Single-ended IF applications require a 1:1 balun to transform the 50 Ω differential IF impedance to 50 Ω single-ended. After the

<!-- image -->

## MAX2031 Evaluation Kit

balun, the IF return loss is better than 15dB. The differential IF is used as an input port for upconverter operation. The user can use a differential IF amplifier following the mixer but a DC block is required on both IF pins.

## Tuning Networks

The performance of the MAX2031 is enhanced with the addition of external tuning networks. Capacitor C4 and inductor L1 form a bandpass filter network that enhances the linearity performance when the mixer is used to upconvert an IF port signal to the RF port. This network is constructed on the kit and limits the usable RF bandwidth to approximately 750MHz to 850MHz (refer to the MAX2031 data sheet). This network can be tuned to accommodate other RF bands if desired.

Capacitor C5 is used to improve the linearity performance of the MAX2031 when the mixer is used to downconvert an RF port signal to the IF port. The value of this cap could change slightly depending on the RF and LO frequencies.

Capacitor C5 is not required for upconverter operation and the C4/L1 network is not required for downconverter operation.

## LOSEL

The EV kit includes a 47k Ω pullup resistor (R2) for easy selection of the LO port. Providing a ground at TP3 selects LO1, and leaving TP3 open selects LO2. To drive TP3 from an external source, follow the limits called out in the MAX2031 device data sheet. Logic voltages should not be applied to LOSEL without the +5V supply voltage. Doing so can cause the on-chip ESD diodes to conduct and could damage the device.

## Layout Considerations

The MAX2031 evaluation board can be a guide for board layout. Pay close attention to thermal design and close placement of components to the IC. The MAX2031 package exposed paddle (EP) conducts heat from the device and provides a low-impedance electrical connection to the ground plane. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance contact. Ideally, this is achieved by soldering the backside of the package directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly below the EP. The MAX2031 EV kit uses nine evenly spaced, 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the ground plane spacing, large surface-mount pads in the IF path may need to have the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2031 Evaluation Kit

Figure 1. Test Setup Diagram

<!-- image -->

ground plane relieved under them to reduce parasitic shunt capacitance.

## Modifying the EV Kit

The standard kit is configured as an upconverter and includes the band-limiting C4/L1 network. This network is  tuned  to  produce  the  best  results  from  750MHz to 850MHz. This network can be tuned to the desired RF band by changing the values of L and C.

If the kit is to be used as a downconverter, then C4 and L1 can be removed. Capacitor C5 should be installed to  improve the downconverter linearity performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

This capacitor might need to be tuned slightly depending on the RF and LO frequency bands of interest.

The DC current of the device can be reduced if reduced performance is acceptable. Reducing the current is accomplished by increasing the value of R1. Doubling the value of R1 cuts the DC current approximately in half. Approximately 10% of the overall IC current is used for housekeeping (R1 set at 523 Ω ) and cannot be reduced.

<!-- image -->

## MAX2031 Evaluation Kit

<!-- image -->

Figure 2. MAX2031 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2031 Evaluation Kit

Figure 3. MAX2031 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 5. MAX2031 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

6

Figure 4. MAX2031 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 6. MAX2031 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX2031 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 9. MAX2031 EV Kit PC Board Layout-Bottom Soldermask

<!-- image -->

## MAX2031 Evaluation Kit

Figure 8. MAX2031 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 10. MAX2031 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7