<!-- lastmod 2022-08-02 -->
## General Description

The MAX2039 evaluation kit (EV kit) simplifies the evaluation of the MAX2039 UMTS, DCS, and PCS base-station up/downconversion mixer. It is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench.

This document provides a list of test equipment required to evaluate the device, a straight-forward test procedure to verify functionality, a description of the EV kit  circuit,  the  circuit  schematic,  a  bill  of  materials (BOM) for the kit, and artwork for each layer of the PC board.

## Component Suppliers

| SUPPLIER   | PHONE          | WEBSITE                   |
|------------|----------------|---------------------------|
| Johnson    | 507-833-8822   | www.johnsoncomponents.com |
| M/A-Com    | 1-800-366-2266 | www.macom.com             |
| Murata     | 770-436-1300   | www.murata.com            |

Note: Indicate that you are using the MAX2039 when contacting these component suppliers.

| DESIGNATION              |   QTY | DESCRIPTION                                                                  |
|--------------------------|-------|------------------------------------------------------------------------------|
| C1                       |     1 | 4.0pF ±0.25pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H4R0C        |
| C2, C6, C7, C8, C10, C12 |     6 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J            |
| C3, C5, C9, C11          |     4 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K         |
| C4                       |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H100J             |
| J1, J2, J3, J4           |     4 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R1            |     1 | 549 Ω ±1% resistor (0603) Any                                              |
| R2            |     1 | 47k Ω ±5% resistor (0603)                                                  |
| T1            |     1 | 1:1 transformer (50:50) M/A-Com MABAES0029                                 |
| TP1           |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent   |
| TP2           |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent |
| TP3           |     1 | Large test point for 0.062in PC board (white) Mouser 151-101 or equivalent |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ 50 Ω SMA Connectors on Input and Output Ports
- ♦ 1700MHz to 2200MHz RF Frequency Range
- ♦ 1500MHz to 2000MHz LO Frequency Range
- ♦ 1900MHz to 2400MHz LO Frequency Range (Contact Factory)
- ♦ DC to 350MHz IF Frequency Range
- ♦ 7.1dB Conversion Loss
- ♦ +34.5dBm Input IP3 (Downconversion)
- ♦ +24.4dBm Input 1dB Compression Point
- ♦ 7.3dB Noise Figure
- ♦ Integrated LO Buffer
- ♦ Integrated RF and LO Baluns
- ♦ Low -3dBm to +3dBm LO Drive
- ♦ Built-In SPDT LO Switch with 45dB LO1 to LO2 Isolation and 50ns Switching Time
- ♦ External Current-Setting Resistor Provides Option for Operating Mixer in Reduced-Power/ReducedPerformance Mode

## Ordering Information

| PART         | TEMP RANGE     | PIN-PACKAGE     |
|--------------|----------------|-----------------|
| MAX2039EVKIT | -40°C to +85°C | 20 Thin QFN-EP* |

## MAX2039 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                              |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U1            |     1 | Mixer IC (5mm x 5mm 20-pin QFN EP) Maxim MAX2039ETP NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE CIRCUIT BOARD TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN. |

## Quick Start

The MAX2039 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2039. It is intended as a guide only, and substitutions may be possible:

- DC supply capable of delivering +5.0V and 175mA
- Two RF signal generators capable of delivering 10dBm of output power in the 1GHz to 3GHz frequency range (i.e., HP 8648)
- RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range (HP 8561E)
- RF power meter (HP 437B)
- Power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This procedure is specific to operation in the U.S. PCS band (reverse channel: 1850MHz to 1910MHz), lowside injected LO for a 200MHz IF. Choose the test frequency based on the particular system's frequency plan, and adjust the following procedure accordingly. See Figure 1 for the mixer test setup diagram:

- 1) Calibrate the power meter for 1700MHz. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to DUT ends of each of the two RF signal generators' SMA cables. This padding

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

improves VSWR and reduces the errors due to mismatch.

- 3) Use the power meter to set the RF signal generators according to the following:
- RF signal source: -5dBm into DUT at 1900MHz (this will be about -2dBm before the 3dB pad).
- LO1 signal source: 0dBm into DUT at 1700MHz (this will be about 3dBm before the 3dB pad).
- LO2 signal source: 0dBm into DUT at 1701MHz (this will be about 3dBm before the 3dB pad).
- 4) Disable the signal generator outputs.
- 5) Connect the RF source (with pad) to the RF port.
- 6) Connect the LO1 and LO2 signal sources to the EV kit's LO1 and LO2 inputs, respectively.
- 7) Measure loss in 3dB pad and cable that will be connected to the IF port. Losses are frequency dependent, so test this at 200MHz (the IF frequency). Use this loss as an offset in all output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's IF port connector and connect a cable from the pad to the spectrum analyzer.
- 9) Set the DC supply to +5.0V, and set a current limit of  around 175mA if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable the supply. Readjust the supply to get +5.0V at the EV kit. There will be a voltage drop across the ammeter when the mixer is drawing current.
- 10) Select LO1 by connecting LOSEL (TP3) to GND.
- 11) Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 200MHz. The level should be about -15dBm (7dB conversion loss, 3dB pad loss). The spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB. Use the power meter to get an accurate output power measurement.

Disconnect the GND connection to LOSEL. It will be pulled high by a pullup resistor on the board, selecting LO2. Observe that the 199MHz signal increases while the 200MHz decreases.

Reconfigure the test setup using a combiner or hybrid to sum the two LO inputs to do a two-tone IP3 measurement if desired. Terminate the unused LO input in 50 Ω .

<!-- image -->

## Detailed Description

The MAX2039 is a high-linearity up/downconverter integrated with RF and LO baluns, an LO buffer, and an SPDT LO input select switch. The EV kit circuit uses the MAX2039 and consists mostly of supply-decoupling capacitors, DC-blocking capacitors, a current-setting resistor,  and  an  IF  balun.  The  MAX2039 EV kit circuit allows for thorough analysis and a simple design-in.

## Supply-Decoupling Capacitors

Capacitors C2, C6, C7, and C8 are 22pF supply-decoupling capacitors used to filter high-frequency noise. Capacitors C3, C9, and C11 are larger 0.01µF used for filtering lower frequency noise on the supply.

## DC-Blocking Capacitors

The MAX2039 has internal baluns at the RF and LO inputs. These inputs have almost 0 Ω resistance at DC, and so DC-blocking capacitors C1, C10, and C12 are used to prevent any external bias from being shunted directly to ground.

## LO Bias

Bias current for the integrated LO buffer is set with resistor R1 (549 Ω , ±1%). The DC current of the device can be reduced by increasing the value of R1 but the device would operate at reduced performance levels (see the Modifying the EV Kit section).

## Tap Network

Capacitor C5 helps to terminate the second-order intermodulation products.

## IF±

The MAX2039 mixer has an IF frequency range of DC to  350MHz. Note that these differential ports are ideal for  providing enhanced IIP2 performance. Singleended IF applications require a 1:1 balun to transform the 50 Ω differential output impedance to a 50 Ω singleended output. After the balun, the IF return loss is better  than  15dB.  The  differential  IF  is  used  as  an  input port for upconverter operation. The user can use a differential IF amplifier following the mixer, but a DC block is required on both IF pins. In this configuration, the IF+ and IF- pins need to be returned to ground through a high resistance (about 1k Ω ).  This  ground  return  can also be accomplished by grounding the RF tap (pin 3) and AC coupling the IF+ and IF- ports (pins 19 and 18).

<!-- image -->

## MAX2039 Evaluation Kit

## LOSEL

The EV kit includes a 47k Ω pullup resistor (R2) for easy selection of the LO port. Providing a ground at TP3 selects LO1, and leaving TP3 open selects LO2. To drive TP3 from an external source, follow the limits called out in the MAX2039 device data sheet. Logic voltages should not be applied to LOSEL without the +5V supply voltage. Doing so can cause the on-chip ESD diodes to conduct and could damage the device.

## Layout Considerations

The MAX2039 evaluation board can be a guide for your board layout. Pay close attention to thermal design and close placement of components to the IC. The MAX2039 package exposed paddle (EP) conducts heat from the device and provides a low-impedance electrical connection to the ground plane. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance contact. Ideally, this is  achieved by soldering the backside of the package directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly  below the EP. The MAX2039EV kit uses nine evenly spaced 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the ground-plane spacing, large surface-mount pads in the IF path may need to have the ground plane relieved under them to reduce parasitic shunt capacitance.

## Modifying the EV Kit

The RF, LO, and IF ports are broadband matched, so there is no need to modify the circuit for use anywhere in  the  1700MHz to 2200MHz RF range, 1400MHz to 2000MHz LO range, and 50MHz to 350MHz IF range.

The DC current of the device can be reduced if reduced performance is acceptable. Reducing the current is accomplished by increasing the value of R1. Doubling the value of R1 cuts the DC current approximately in half.  Approximately 10% of the overall IC current is used for housekeeping (R1 set at 549 Ω ) and cannot be reduced.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2039 Evaluation Kit

Figure 1. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2039 Evaluation Kit

<!-- image -->

Figure 2. MAX2039 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2039 Evaluation Kit

<!-- image -->

Figure 3. MAX2039 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 5. MAX2039 EV Kit PC Board Layout -Top Layer Metal

Figure 4. MAX2039 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 6. MAX2039 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX2039 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 9. MAX2039 EV Kit PC Board Layout-Bottom Soldermask

<!-- image -->

## MAX2039 Evaluation Kit

Figure 8. MAX2039 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 10. MAX2039 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7