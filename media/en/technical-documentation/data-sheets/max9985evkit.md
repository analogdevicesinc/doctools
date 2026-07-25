<!-- lastmod 2022-08-02 -->
## General Description

The MAX9985 evaluation kit (EV kit) simplifies the evaluation of the MAX9985 dual-channel downconversion mixer,  ideal  for  GSM  850/950,  2G/2.5G  EDGE, WCDMA, cdma2000 ® , and iDEN ® base-station applications. It is fully assembled and factory tested. Standard 50 Ω SMA connectors are included on the EV kit for the input and output to allow for quick and easy evaluation on the test bench.

This  document provides a component list for the EV kit, a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic,  and  artwork  for  each  layer  of  the  printed-circuit board (PCB).

| DESIGNATION                  |   QTY | DESCRIPTION                                                           |
|------------------------------|-------|-----------------------------------------------------------------------|
| C1, C2, C7, C8               |     4 | 39pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H390J     |
| C3, C6                       |     2 | 0.033µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E333K |
| C4, C5                       |     0 | Not installed, capacitors                                             |
| C9, C13, C15, C17, C18       |     5 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103K  |
| C10, C11, C12, C19, C20, C21 |     6 | 150pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H151J    |
| C14, C16                     |     2 | 82pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H820J     |

cdma2000 is a registered trademark of Telecommunications Industry Association.

iDEN is a registered trademark of Motorola, Inc.

<!-- image -->

## Features

- ♦ 700MHz to 1000MHz RF Frequency Range
- ♦ 570MHz to 865MHz LO Frequency Range
- ♦ 50MHz to 250MHz IF Frequency Range
- ♦ 6dB Typical Conversion Gain
- ♦ 10.5dB Typical Noise Figure
- ♦ +28.5dBm Typical Input IP3
- ♦ Integrated LO Buffers
- ♦ Dual Channels Ideal for Diversity Receiver Applications
- ♦ Low -3dBm to +3dBm LO Drive
- ♦ Built-In SPDT LO Switch with 43dB LO1-to-LO2 Isolation
- ♦ 47dB Typical Channel-to-Channel Isolation
- ♦ 50 Ω SMA Connectors on Input and Output Ports
- ♦ 4:1 Balun for Single-Ended IF Outputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE     | IC PACKAGE      |
|---------------|----------------|-----------------|
| MAX9985EVKIT# | -40°C to +85°C | 36 Thin QFN-EP* |

#Denotes an RoHS-compliant EV kit.

*EP = Exposed paddle.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                             |
|----------------|-------|-------------------------------------------------------------------------|
| J1-J6          |     6 | PCB edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| L1, L2, L4, L5 |     4 | 560nH ±5% wire-wound inductors (0805) Coilcraft 0805CS-561XJLC          |
| L3, L6         |     2 | 30nH ±5% wire-wound inductors (0603) Coilcraft 0603CS-30NXJLW           |
| R1, R4         |     2 | 1.07k Ω ±1% resistors (0402)                                            |
| R2, R5         |     2 | 1.1k Ω ±1% resistors (0402)                                             |
| R3, R6         |     2 | 0 Ω resistors (1206)                                                    |
| R7             |     1 | 47k Ω ±5% resistor (0603)                                               |
| T1, T2         |     2 | 4:1 transformers (200:50) Mini-Circuits TC4-1W-7A+                      |

## MAX9985 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| TP1           |     1 | Large test point (red) for 0.062inPCB Mouser 151-107-RC   |
| TP2           |     1 | Large test point (black) for 0.062inPCB Mouser 151-103-RC |
| TP3           |     1 | Large test point (white) for 0.062inPCB Mouser 151-101-RC |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U1            |     1 | MAX9985ETX+ (36-pin thin QFN-EP, 6mm x 6mm) Note: U1 has an exposed paddle conductor, which requires it to be solder-attached to a grounded pad on the PCB to ensure a proper electrical/thermal design. |
| -             |     1 | PCB: MAX9985 Evaluation Kit#                                                                                                                                                                             |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                   |
|-----------------------|--------------|---------------------------|
| Coilcraft, Inc.       | 800-322-2645 | www.coilcraft.com         |
| Digi-Key Corp.        | 800-344-4539 | www.digikey.com           |
| Johnson Components    | 507-833-8822 | www.johnsoncomponents.com |
| Mini-Circuits         | 718-934-4500 | www.minicircuits.com      |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com            |

Note: Indicate that you are using the MAX9985 when contacting these component suppliers.

## Quick Start

## Required Test Equipment

Before beginning, the following equipment is required to  verify  the  operation  of  the  MAX9985 EV kit. It is intended as a guide only, and some substitutions are possible.

- One DC power supply (e.g., HP E3631A)
- One digital multimeter (ammeter) (e.g., Fluke 75 Series II)
- Three RF signal generators (e.g., HP/Agilent 8648B)
- One RF power meter (e.g., HP 437B)
- One spectrum analyzer (e.g., HP 8561)
- One high-power sensor (power head) (e.g., HP 8482A)
- Four 3dB attenuators (3dB pads)
- One 50 Ω (1W) termination

## Connections and Setup

The MAX9985 EV kit is fully assembled and factory tested. Follow the instructions below for proper device evaluation. This section provides a step-by-step guide to testing the basic functionality of the EV kit. Caution: As a general precaution to prevent damaging the outputs by driving high-voltage standing-wave ratio (VSWR) loads, do not turn on the DC power or RF signal generators until all connections are completed.

- 1) Calibrate the power meter for 870MHz. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to DUT ends of each of the three RF signal generators' SMA cables. This padding improves VSWR and reduces the errors due to mismatch.
- 3) Use the power meter to set the RF signal generators according to the following:

RF signal source: -5dBm into DUT at 870MHz LO1 signal source: 0dBm into DUT at 770MHz LO2 signal source: 0dBm into DUT at 771MHz

- 4) Connect the LO1 and LO2 signal sources to the EV kit LO inputs.
- 5) Connect the signal sources to the appropriate SMA inputs. The RF input can be connected to either the RFMAIN or RFDIV inputs depending on test.
- 6) Measure loss in the 3dB pad and cable that will be connected to IFOUT. Losses are frequency dependent, so test this at 100MHz (the IF frequency). Use this loss as an offset in all output power/gain calculations.
- 7) Connect this 3dB pad to the EV kit's appropriate IFOUT connector and connect a cable from the pad to the spectrum analyzer.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) Set the DC supply to +5V and set a current limit to approximately 500mA if possible. Connect supplies to the EV kit through the ammeter. Turn on the supply.  Readjust the supply to get +5V at the EV kit. There will be a voltage drop across the ammeter when the mixer is drawing current.
- 9) Select LO2 by grounding LOSEL.
- 10) Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 99MHz. The level should be approximately -2dBm (6dB conversion gain, 3dB pad loss). The spectrum analyzer's absolute magnitude accuracy is typically not better than ±1dB. Use the power meter to get an accurate output power measurement.

Disconnect the GND connection to LOSEL. It will be pulled high by a pullup resistor on the board. This selects LO1. Observe the new IF output at 100MHz.

Reconfigure the test setup using a combiner or hybrid to sum the two RF inputs to do a 2-tone IP3 measurement if desired. Terminate the unused LO input in 50 Ω .

## Detailed Description

The MAX9985 is a highly integrated dual-channel downconversion mixer. RF and LO baluns are integrated on-chip, as well as an LO buffer, IF amplifier, and a single-pole/double throw (SPDT) LO input select switch. The MAX9985 EV kit circuit consists mostly of supply decoupling capacitors and DC-blocking capacitors, resulting in a simple design-in.

## DC-Blocking Capacitors

The MAX9985 has internal baluns on the RFMAIN, RFDIV, LO1, and LO2 inputs. These inputs have almost 0 Ω resistance at DC, so DC-blocking capacitors C1, C8, C14, and C16 are used to prevent any external bias from being shunted directly to ground. Capacitors C10, C11, C19, and C20 are used to keep DC current from flowing into the transformer, as well as providing the flexibility for matching.

## LO Buffer and IF Amplifier Bias

Bias currents for the integrated LO buffers and the IF output amplifiers are set with resistors. These values were carefully chosen for best linearity and lowest supply current through testing at the factory. Changing these values, or using lower tolerance resistors, degrades performance. Refer to the MAX9985 IC data sheet Typical Operating Characteristics section to see how the performance varies with these resistor values.

<!-- image -->

## MAX9985 Evaluation Kit

## Output Voltage Drop Resistors

Resistors R3 and R6 are not required on this EV kit and are set to 0 Ω .

## TAP Network

The network at TAP, formed by capacitors C2, C3, C6, and C7, helps terminate the 2nd-order intermodulation products at the RF inputs.

## IND\_EXT

The 30nH low-ESR wire-wound inductors (L3 and L6) improve LO-to-IF and RF-to-IF isolation. If isolation is not critical, then the corresponding pins can be grounded. Approximately 100mA flows through L3 and L6, thus requiring a low-ESR inductor. To ensure stable operation, the load impedance presented to the mixer must be such that any capacitances on the IF- and IF+ ports to ground do not exceed several picofarads.

## IF Outputs

The MAX9985 employs a differential IF output to offer increased IIP2 system performance; the EV kit uses a 4:1 balun to transform the 200 Ω differential  output impedance to a 50 Ω single-ended output for convenient  bench evaluation. Inductive pullups provide DC bias to the IF output amplifiers. Series capacitors C10, C11, C19, and C20 work in conjunction with the inductors and the 4:1 balun transformer (T1 and T2) to match the IF outputs for 100MHz operation.

As the differential IF outputs are relatively high impedance (200 Ω ),  they are more susceptible to component parasitics. It  is  often  good  practice  to  minimize  the ground plane directly underneath large components to reduce associated shunt-C parasitics.

## LOSEL

The EV kit includes a 47k Ω pullup resistor (R7) for easy selection of the LO port. Providing a ground at TP3 selects LO2, and leaving TP3 open selects LO1. To drive TP3 from an external source, follow the limits called out in the MAX9985 IC data sheet. Do not apply logic  voltages  to  TP3  without  the  +5V  supply  applied. Doing so can cause the on-chip ESD diodes to conduct and could damage the part.

## Layout Considerations

The MAX9985 EV kit board can be a guide for your board layout. Pay close attention to thermal design and close placement of parts to the IC. The package's exposed paddle (EP) conducts heat from the part and provides a low-impedance electrical connection. The EP MUST be attached to the PCB ground plane with a low thermal and electrical impedance contact. Ideally, this can be achieved by soldering the backside package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9985 Evaluation Kit

contact directly to a top metal ground plane on the PCB. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP. The EV kit uses nine evenly spaced, 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the RF ground-plane spacing, large surface-mount pads in the RF path may need to have the ground plane under them minimized to reduce shunt capacitance.

Figure 1. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9985 Evaluation Kit

Figure 2. MAX9985 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9985 Evaluation Kit

<!-- image -->

Figure 3. MAX9985 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Figure 5. MAX9985 EV Kit PCB Layout-Top Layer Metal

Figure 4. MAX9985 EV Kit PCB Layout-Top Soldermask

<!-- image -->

Figure 6. MAX9985 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX9985 EV Kit PCB Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 9. MAX9985 EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

## MAX9985 Evaluation Kit

Figure 8. MAX9985 EV Kit PCB Layout-Bottom Layer Metal

<!-- image -->

Figure 10. MAX9985 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7