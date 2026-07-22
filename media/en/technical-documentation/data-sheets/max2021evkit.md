<!-- lastmod 2022-08-04 -->
## General Description

The MAX2021 evaluation kit (EV kit) simplifies the evaluation of the MAX2021 direct upconversion (downconversion) quadrature modulator (demodulator) designed for RFID handheld and portal readers, as well as single and multicarrier  750MHz  to  1200MHz  GSM/EDGE, cdma2000 ® , WCDMA and iDEN ® base-station applications.  It  is  fully  assembled  and  tested  at  the  factory. Standard 50 Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench using RF test equipment.

This document provides a list of test equipment required to evaluate the device, a straight-forward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a bill of materials (BOM) for the kit, and artwork for each layer of the PCB.

cdma2000 is a registered trademark of Telecommunications Industry Association.

iDEN is a registered trademark of  Motorola, Inc.

| DESIGNATION          |   QTY | DESCRIPTION                                                               |
|----------------------|-------|---------------------------------------------------------------------------|
| C1, C6, C7, C10, C13 |     5 | 33pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H330J         |
| C2, C5, C8, C11, C12 |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K       |
| C3                   |     1 | 82pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H820J          |
| C9                   |     1 | 8.2pF ±0.25pF, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H8R2C     |
| C14-C25              |     0 | Not installed                                                             |
| J1-J6                |     6 | PCB edge-mounted SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| J7, J8               |     2 | Headers 1 x 3 (0.100 spacing 0.062in thick board)                         |
| L1-L4                |     0 | Not installed                                                             |
| R1                   |     1 | 432 Ω ±1% resistor (0402) Any                                             |

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ 50 Ω SMA Connectors on Input and Output Ports
- ♦ 750MHz to 1200MHz RF Range
- ♦ High-Linearity and Low-Noise Performance
- ♦ Broadband Baseband Input/Output
- ♦ DC-Coupled Input Provides for Direct DAC/ADC Interface

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2021EVKIT | -40°C to +85°C | 36 QFN-EP*   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R2            |     1 | 619 Ω ±1% resistor (0402) Any                                                                                                                                                                                                              |
| R3            |     1 | 332 Ω ±1% resistor (0402) Any                                                                                                                                                                                                              |
| R4-R11        |     0 | Not installed                                                                                                                                                                                                                              |
| TP1           |     1 | Large test point for 0.062in PCB (red) Mouser 151-107-RC                                                                                                                                                                                   |
| TP2           |     1 | Large test point for 0.062in PCB (black) Mouser 151-103-RC                                                                                                                                                                                 |
| TP3, TP4      |     2 | Large test point for 0.062in PCB (white) Mouser 151-101-RC                                                                                                                                                                                 |
| U1            |     1 | Mod/Demod IC (6mm x 6mm, 36-pin QFN exposed paddle) Maxim MAX2021ETX+ Note: U1 has an exposed paddle conductor that requires it to be solder attached to a grounded pad on the circuit board to ensure a proper electrical/thermal design. |

## MAX2021 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| M/A-Com    | 800-366-2266 | www.macom.com             |
| Murata     | 770-436-1300 | www.murata.com            |

Note: Indicate that you are using the MAX2021 when contacting these component suppliers.

## Quick Start

The MAX2021 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation as an upconverter.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2021 as an upconverter. It is intended as a guide only, and substitutions may be possible.

- One DC supply capable of delivering +5.0V and 350mA
- One low-noise RF signal generator capable of delivering 10dBm of output power in the 1GHz to 3GHz frequency range (i.e., HP 8648)
- One I/Q generator capable of producing two differential 1MHz sine waves, 90° out-of-phase with each other, with a 1.4VP-P differential amplitude
- One quad-channel oscilloscope with a 100MHz minimum bandwidth
- Low-capacitance oscilloscope probes
- One RF spectrum analyzer with a 100kHz to 3GHz frequency range (HP 8561E)
- One RF power meter (HP 437B)
- One power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit as an upconverter. As a general precaution to prevent damaging the outputs by driving high VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This upconverter procedure is general to operation with an I/Q baseband input signal at 1MHz. Choose the test frequency based on the particular system's frequency plan and adjust the following procedure accordingly. See Figure 2 for the test setup diagram.

- 1) Calibrate the power meter. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect a 3dB pad to the DUT end of the RF signal generators' SMA cable. This padding improves VSWR and reduces the errors due to mismatch.
- 3) Use the power meter to set the RF signal generators according to the following:
- LO signal source: 0dBm into DUT at 900MHz (this will be approximately 3dBm before the 3dB pad).

Use an oscilloscope to calibrate the baseband I/Q differential inputs to the following:

- Use a signal source where I+, I-, Q+, and Qare all 50 Ω single-ended outputs. Load the I+/Iports and Q+/Q- ports with 50 Ω differential loads. Set the voltage across the 50 Ω differential loads to be 1.4VP-P differential. Remove the 50 Ω differential loads. Note that the DUT's I+/Iand Q+/Q- port impedances will provide the differential loading in Step 10.
- 4) Disable the signal generator outputs.
- 5) Connect the I/Q source to the differential I/Q ports.
- 6) Connect the LO source to the EV kit LO input.
- 7) Measure the loss in the 3dB pad and cable that will be connected to the RF port. Losses are frequency dependent, so test this at 900MHz (the RF frequency). Use this loss as an offset in all output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's RF port connector and connect a cable from the pad to the spectrum analyzer.
- 9) Set DC supply to +5.0V, and set a current limit around 350mA, if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable the supply. Readjust the supply to get +5.0V at the EV kit. A voltage drop occurs across the ammeter when the device is drawing current.
- 10) Enable the LO and the I/Q sources.

## Testing the Direct Upconverter

Adjust the center and span of the spectrum analyzer to 900MHz and 5MHz, respectively. The LO leakage appears at 900MHz and there are two sidebands at 899MHz and 901MHz (LSB and USB). One of the sidebands is the selected RF signal, while the second is the image. Depending on whether the Q channel is 90 degrees advanced or 90 degrees delayed from the I  channel determines which sideband is selected and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

which is rejected. Note that the sideband suppression is about 40dB typical down from the desired sideband. The desired sideband power level should be approximately -2.3dBm (0.7dBm output power including 3dB pad loss). Phase and amplitude differences at the I and Q inputs result in degradation of the sideband suppression. Note that the spectrum analyzer's uncalibrated absolute magnitude accuracy is typically no better than ±1dB.

## Detailed Description

The MAX2021 is designed for upconverting (downconverting) to (from) a 750MHz to 1200MHz RF from (to) baseband. Applications include RFID handheld and portal readers, as well as single and multicarrier 750MHz to 1200MHz GSM/EDGE, cdma2000, WCDMA, and iDEN base stations. Direct upconversion (downconversion) architectures are advantageous since they significantly reduce transmitter (receiver) cost, part count, and power consumption compared to traditional heterodyne conversion systems.

The MAX2021 integrates internal baluns, an LO buffer, a phase splitter, two LO driver amplifiers, two matched double-balanced passive mixers, and a wideband quadrature combiner. The MAX2021's high-linearity mixers, in conjunction with the part's precise in-phase and quadrature channel matching, enable the device to possess excellent dynamic range, ACLR, 1dB compression point, and LO and sideband suppression characteristics. These features make the MAX2021 ideal for four-carrier WCDMA operation.

The MAX2021 EV kit circuit allows for thorough analysis and a simple design-in.

## Supply-Decoupling Capacitors

The MAX2021 has several RF processing stages that use the various VCC pins. While they have on-chip decoupling, off-chip interaction between them can degrade gain, linearity, carrier suppression, and output power. Proper voltage-supply bypassing is essential for high-frequency circuit stability.

C1, C6, C7, C10, and C13 are 33pF supply-decoupling capacitors used to filter high-frequency noise. C2, C5, C8, C11, and C12 are larger 0.1µF capacitors used for filtering lower-frequency noise on the supply.

## DC-Blocking Capacitors

The MAX2021 has internal baluns at the RF output and LO input. These inputs have almost 0 Ω resistance at DC, so DC-blocking capacitors C3 and C9 are used to prevent any external bias from being shunted directly to ground.

<!-- image -->

## MAX2021 Evaluation Kit

## LO Bias

The bias current for the integrated LO buffer is set with resistor R1 (432 Ω ±1%). Resistors R2 (619 Ω ±1%) and R3 (332 Ω ±1%) set the bias currents for the LO driver amplifiers. Increasing the value of R1, R2, and R3 reduces the current, but the device operates at reduced performance levels. Doubling the values of R1, R2, and R3 reduces the total current to approximately 166mA, but the OIP3 degrades by approximately 4.5dB. Refer to the MAX2021 data sheet for more details.

## IF Bias

LO leakage nulling is usually accomplished by adjusting the external driving DACs to produce an offset in the common-mode voltage to compensate for any imbalance from I+ to I- and from Q+ to Q-.

The EV kit has an added feature to null the LO leakage if  the  above  method  is  not  available.  To  enable  this added feature one would first need to install 8k Ω resistors  for  R8  through  R11  (see  Figure  3  for  schematic details). To minimize cross coupling of the BB signals, consider adding in the C22 through C25 bypass capacitors. For this method to work, a DC-coupled source impedance (typically 50 Ω ) needs to appear on all  four  baseband inputs to form voltage-dividers with the 8k Ω injection resistors. Use a shunt to connect pin 1 of J7 to pin 2 of J7 and a second shunt to connect pin 1 of J8 to pin 2 of J8. Set two DC supplies to 0V and connect one to QBIAS (TP4) and one to IBIAS (TP3). Observe the LO leakage level out of the RF port and slowly adjust the QBIAS positive and observe whether the LO leakage increase or decreases. If the LO leakage decreases, the polarity of the offset is correct.  If  the  LO  leakage  increases, QBIAS can be adjusted negative or the shunt can be moved on J8 to connect pin 2 to pin 3. Perform the same adjustment and method to the IBIAS (TP3) supply. Optimize the QBIAS and IBIAS voltages to null out the LO leakage.

## External Diplexer

LO leakage at the RF port can be nulled to a level less than -80dBm by introducing DC offsets at the I and Q ports. However, this null at the RF port can be compromised by an improperly terminated I/Q IF interface. Care must be taken to match the I/Q ports to the driving DAC circuitry. Without matching, the LO's second-order (2f LO ) term may leak back into the modulator's I/Q input port where it can mix with the internal LO signal to produce additional LO leakage at the RF output. This leakage effectively counteracts against the LO

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2021 Evaluation Kit

Figure 1. Example Diplexer Network for GSM 900 Applications

<!-- image -->

nulling. In addition, the LO signal reflected at the I/Q IF port produces a residual DC term that can disturb the nulling condition.

As shown in Figure 1, providing an RC termination on each of the I+, I-, Q+, Q- ports reduces the amount of LO leakage present at the RF port under varying temperature, LO frequency, and baseband drive conditions. Note that the resistor value is chosen to be 100 Ω with a corner frequency 1 / (2 π RC) selected to adequately filter the fLO and 2fLO leakage, yet not affecting the flatness of  the  baseband response at the highest baseband frequency. The common-mode fLO and 2fLO signals at I+/I-  and  Q+/Q- effectively see the RC networks and thus become terminated in 50 Ω (R/2). The RC network provides a path for absorbing the 2fLO and fLO leakage, while the inductor provides high impedance at fLO and 2fLO to help the diplexing process.

The MAX2021 EV kit includes flexibility for a diplexer network to be installed if desired. See Figure 3 for details on the EV kit schematic.

## Layout Considerations

The MAX2021 evaluation board can be a guide for your board layout. Pay close attention to thermal design and close  placement  of  components  to  the  IC.  The MAX2021 package's exposed paddle (EP) conducts heat from the device and provides a low-impedance electrical connection to the ground plane. The EP must be attached to the PCB ground plane with a low thermal and electrical impedance contact. Ideally, this is achieved by soldering the backside of the package directly to a top metal ground plane on the PCB. Alternatively, the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly  below  the  EP.  The  MAX2021 EV kit uses nine evenly spaced 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the ground plane spacing, large surface-mount pads in the IF path may need to have the ground plane relieved under them to reduce parasitic shunt capacitance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2021 Evaluation Kit

<!-- image -->

Figure 2. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2021 Evaluation Kit

Figure 3. MAX2021 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX2021 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Figure 6. MAX2021 EV Kit PCB Layout-Top Layer Metal

<!-- image -->

## MAX2021 Evaluation Kit

Figure 5. MAX2021 EV Kit PCB Layout-Top Soldermask

<!-- image -->

Figure 7. MAX2021 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2021 Evaluation Kit

<!-- image -->

Figure 8. MAX2021 EV Kit PCB Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 10. MAX2021 EV Kit PCB Layout-Bottom Soldermask

Figure 9. MAX2021 EV Kit PCB Layout-Bottom Layer (Metal)

<!-- image -->

Figure 11. MAX2021 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8