<!-- lastmod 2022-08-02 -->
## General Description

The MAX9995 evaluation kit (EV kit) simplifies the evaluation of the MAX9995 dual high-linearity mixer. It is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the EV kit for the input and output to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit  schematic,  a  bill  of  materials  (BOM)  for  the  kit, and artwork for each layer of the PC board.

Contact MaximDirect sales and availability of these kits.

## Component Suppliers

| SUPPLIER      | PHONE        | WEBSITE                   |
|---------------|--------------|---------------------------|
| Coilcraft     | 800-322-2645 | www.coilcraft.com         |
| Digi-Key      | 800-344-4539 | www.digikey.com           |
| Johnson       | 507-833-8822 | www.johnsoncomponents.com |
| Mini-Circuits | 718-934-4500 | www.minicircuits.com      |
| Murata        | 770-436-1300 | www.murata.com            |

Note: When contacting these suppliers, indicate that you are using the MAX9995.

| DESIGNATION      |   QTY | DESCRIPTION                                                            |
|------------------|-------|------------------------------------------------------------------------|
| C1, C8           |     2 | 4pF ± 0.25pF, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H4R0C  |
| C2, C7           |     2 | 10pF ± 5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H100J     |
| C3, C6           |     2 | 0.033µF ± 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E333K |
| C4, C5, C14, C16 |     4 | 22pF ± 5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H220J     |

## Component List

| DESIGNATION                  |   QTY | DESCRIPTION                                                                  |
|------------------------------|-------|------------------------------------------------------------------------------|
| C9, C13, C15, C17, C18       |     5 | 0.01µF ± 10%, 25V X7R ceramic capacitors (0402) Murata GRP155R71E103K        |
| C10, C11, C12, C19, C20, C21 |     6 | 150pF ± 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H151J          |
| J1-J6                        |     6 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| L1, L2, L4, L5               |     4 | 330nH ± 5% wire-wound inductors (0805) Coilcraft 0805CS-331XJBC              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ 1700MHz to 2200MHz RF Frequency Range
- ♦ 1400MHz to 2000MHz LO Frequency Range (MAX9995)
- ♦ 1900MHz to 2400MHz LO Frequency Range (Contact Factory)
- ♦ 40MHz to 350MHz IF Frequency Range
- ♦ 6.1dB Conversion Gain
- ♦ +25.6dBm Input IP3
- ♦ 9.8dB Noise Figure
- ♦ 66dBc 2RF to 2LO Spurious Rejection at PRF = -10dBm
- ♦ Dual Channels Ideal for Diversity Receiver Applications
- ♦ Integrated LO Buffer
- ♦ Integrated RF and LO Baluns for Single-Ended Inputs
- ♦ Low -3dBm to +3dBm LO Drive
- ♦ Built-In SPDT LO Switch with 50dB LO1 to LO2 Isolation and 50ns Switching Time
- ♦ 44dB Channel-to-Channel Isolation

## Ordering Information

| PART         | TEMP RANGE             | IC PACKAGE      |
|--------------|------------------------|-----------------|
| MAX9995EVKIT | T C = -40°C to +85°C** | 36 Thin QFN-EP* |

## MAX9995 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| L3, L6        |     2 | 10nH ± 5% wire-wound inductors (0603) Coilcraft 0603CS-10NXJBC             |
| R1, R4        |     2 | 1.21k Ω ±1% resistors (0402)                                               |
| R2, R5        |     2 | 392 Ω ± 1% resistors (0402)                                                |
| R3, R6        |     2 | 10 Ω ± 1% resistors (1206)                                                 |
| R7            |     1 | 47k Ω ± 5% resistor (0603)                                                 |
| T1, T2        |     2 | 4:1 transformers ( 200:50 ) Mini Circuits TC4-1W-7A                        |
| TP1           |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent   |
| TP2           |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent |

## Quick Start

The MAX9995 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

Table 1 lists the equipment required to verify the operation  of  the  MAX9995 EV kit. It  is  intended  as  a  guide only, and some substitutions are possible.

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made:

- 1) Calibrate the power meter for 1900MHz. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to the DUT ends of each of the three RF signal generators' SMA cables. This padding improves VSWR, and reduces the errors due to mismatch.
- 3) Use the power meter to set the RF signal generators according to the following:
- RF signal source: -5dBm into DUT at 1900MHz
- LO1 signal source: 0dBm into DUT at 1700MHz (fIF = 200MHz)

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TP3           |     1 | Large test point for 0.062in PC board (white) Mouser 151-101 or equivalent                                                                                                                                                                     |
| U1            |     1 | Active dual mixer IC (6mm x 6mm thin QFN, exposed paddle) Maxim: MAX9995ETX NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE CIRCUIT BOARD TO ENSURE PROPER ELECTRICAL/THERMAL DESIGN. |

- LO2 signal source: 0dBm into DUT at 1701MHz (fIF = 199MHz)
- 4) Disable all three signal sources. Connect the LO1 and LO2 signal sources to the EV kit LO inputs.
- 5) Connect the signal sources to the appropriate SMA inputs. The RF input can be connected to either the RFMAIN or RFDIV inputs, depending on test.
- 6) Measure loss in 3dB pad and cable that is connected to IFMAIN/IFDIV. Losses are frequency dependent, so test this at 200MHz (the IF frequency). Use this  loss  as  an  offset  in  all  output  power/gain calculations.
- 7) Connect this 3dB pad to the EV kit's appropriate IFMAIN/IFDIV connector, and connect a cable from the pad to the spectrum analyzer.
- 8) Set the DC supply to +5.0V and set a current limit around 500mA, if possible. Connect supplies to the EV kit through the ammeter. Turn on the supply. Readjust the supply to get +5.0V at the EV kit. There will be a voltage drop across the ammeter when the mixer is drawing current.
- 9) Select LO2 by grounding LOSEL.
- 10) Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 199MHz. The level should be about -2dBm (6dB conversion gain, 3dB pad loss). The spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB. Use the power meter to

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Test Equipment

| EQUIPMENT          |   QTY | DESCRIPTION                    |
|--------------------|-------|--------------------------------|
| HP E3631A          |     1 | DC power supply                |
| Fluke 75 Series II |     1 | Digital multimeter (ammeter)   |
| HP/Agilent 8648B   |     3 | RF signal generators           |
| HP 437B            |     1 | RF power meter                 |
| HP 8561            |     1 | Spectrum analyzer              |
| HP 8482A           |     1 | High-power sensor (power head) |
| 3dB pad            |     4 | 3dB attenuators                |
| 50 Ω termination   |     1 | 50 Ω (1W) termination          |

get an accurate output power measurement.

Disconnect the GND connection to LOSEL. It will be pulled high by a pullup resistor on the board. This selects LO1. Observe the new IF output at 200MHz.

Reconfigure the test setup using a combiner or hybrid to sum the two RF inputs to do a two-tone IP3 measurement, if desired. Terminate the unused LO input in 50 Ω .

## Detailed Description

The MAX9995 is a highly integrated dual downconverter; RF and LO baluns are integrated on-chip, as well as two double-balanced mixers, two IF amplifiers, an LO buffer, and a single-pole/double throw (SPDT) LO input select switch. The EV kit circuit consists mostly of supply decoupling capacitors and DC-blocking capacitors, making for a simple design-in.

## DC-Blocking Capacitors

The MAX9995 has internal baluns on the RFMAIN, RFDIV, LO1, and LO2 inputs. These inputs have almost 0 Ω resistance at DC, so DC-blocking capacitors C1, C8, C14, and C16 are used to prevent any external bias from being shunted directly to ground. Capacitors C10, C11, C19, and C20 are used to keep DC current from flowing into the transformer, as well as providing the flexibility for matching.

## LO Buffer and IF Amplifier Bias

Bias currents for the integrated LO buffers and the IF output amplifiers are set with resistors R2, R5, and R1, R4, respectively. These values were carefully chosen for best linearity and lowest supply current through testing at the factory. Changing these values, or using lower tolerance resistors, degrades performance. If lower currents are desired, consult the factory for optimum resistor settings.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9995 Evaluation Kit

## Current-Limiting Resistors

Resistors R3 and R6 are used for current limiting at the supply. These resistors typically dissipate 50mW each.

## TAP Network

The network at TAP formed by C2, C3, C6, and C7 helps to terminate the second-order intermodulation products at the RF inputs.

## IND\_EXT

The 10nH wire-wound inductors L3 and L6 improve LOto-IF  and  RF-to-IF  isolation.  If  isolation  is  not  critical, then the corresponding pins can be grounded.

## IF Outputs

The MAX9995 employs a differential IF output to offer increased IP2 system performance. For convenience, the EV kit uses a 4:1 balun to transform the 200 Ω differential output impedance to a 50 Ω single-ended output. Inductive pullups provide DC bias to the IF output amplifiers.  Series  capacitors  C10,  C11,  C19,  and  C20 work in conjunction with the inductors and the 4:1 balun transformers (T1 and T2) to match the IF outputs for 200MHz operation.

As the differential IF outputs are relatively high impedance (200 Ω ),  they are more susceptible to component parasitics. It is often good practice to relieve the ground plane directly underneath large components to reduce associated shunt-C parasitics (see Figure 6).

## LOSEL

The EV kit includes a 47k Ω pullup resistor for easy selection of the LO port. Providing a ground at TP3 selects LO2, and leaving TP3 open selects LO1. To drive TP3 from an external source, follow the limits called out in the MAX9995 device data sheet. Do not apply logic voltages to TP3 without the +5V supply applied. Doing so can cause the on-chip ESD diodes to conduct and could damage the part.

## MAX9995 Evaluation Kit

Figure 1. Test Setup Diagram

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Layout Considerations

The MAX9995 evaluation board can be a guide for your board layout. Pay close attention to thermal design and close placement of parts to the IC. The package's exposed paddle (EP) conducts heat from the part and provides a low-impedance electrical connection. The EP MUST be attached to the PC board ground plane with  a  low  thermal  and  electrical  impedance contact. Ideally, this can be achieved by soldering the backside package contact directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP. The EV kit uses nine evenly spaced, 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the RF ground-plane spacing, large surface-mount pads in the RF path may need the ground plane relieved under them to reduce shunt capacitance.

## Modifying the EV Kit

The RF and LO inputs are broadband matched, so there is no need to modify the circuit for use anywhere in  the  1700MHz to 2200MHz RF range (1400MHz to 2000MHz LO range).

<!-- image -->

## MAX9995 Evaluation Kit

Retuning for a different IF frequency is as simple as scaling the values of the IF pullup inductors up or down with frequency. The IF output looks like 200 Ω differential in parallel with a capacitor. The capacitance is due to the combination of the IC, PC board, and external IF components. The capacitance from the IC is approximately 2pF to ground (1pF differential), while that from the  PC board and external components is approximately 3.5pF to ground. The total 5.5pF of capacitance is resonated out at the frequency of interest by the bias inductors. To determine the inductor value, use the following equation:

<!-- formula-not-decoded -->

The IF output is tuned for operation at approximately 200MHz, so a 330nH inductor is used. For lower IF frequencies (i.e., larger component values), maintain the component's Q value at the cost of larger case size, unless it is unavoidable.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9995 Evaluation Kit

Figure 2. MAX9995 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX9995 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 5. MAX9995 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

## MAX9995 Evaluation Kit

Figure 4. MAX9995 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 6. MAX9995 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9995 Evaluation Kit

<!-- image -->

Figure 7. MAX9995 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 9. MAX9995 EV Kit PC Board Layout-Bottom Soldermask

Figure 8. MAX9995 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 10. MAX9995 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600