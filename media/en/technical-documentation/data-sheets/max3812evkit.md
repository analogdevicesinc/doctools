<!-- lastmod 2022-08-03 -->
## General Description

The MAX3812 evaluation kit (EV kit) is a fully assembled demonstration board that provides easy evaluation of the MAX3812 multirate SMPTE HD/SD-SDI cable driver with selectable slew rate. The EV kit has SMA and BNC connectors for high-speed inputs and outputs to simplify connection to test equipment. The outputs are designed to interface with 75 Ω and 50 Ω test environments.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                |
|--------------------|-------|------------------------------------------------------------|
| C1, C2, C4         |     3 | 0.01µF ± 10% ceramic capacitors (0402)                     |
| C3, C5, C6, C7     |     4 | 4.7µF ± 10% ceramic capacitors (0603)                      |
| C20                |     1 | 33µF ± 5% tantalum capacitor AVX TAJB336K010R              |
| J1, J2, J3         |     3 | SMA connectors (edge-mount, tab) EF Johnson 142-0701-851   |
| J4                 |     1 | BNC connector (edge-mount) Trompeter Electronics UCBJE20-1 |
| JU1, JU2           |     2 | 3-pin headers, 0.1in centers Digi-Key S1012E-36-ND         |
| None               |     2 | Shunts Digi-Key S9000-ND                                   |
| L1, L2             |     2 | 6.8nH ± 5% inductors Coilcraft 0402CS-6N8XJLW              |
| L4                 |     1 | 1 H ± 5% inductor Coilcraft 1008CS-102XJLC                 |
| R1, R2             |     2 | 49.9 ± 1% resistors (0402)                                 |
| R3                 |     1 | 549 ± 1% resistor (0402)                                   |
| R4                 |     1 | 750 ± 1% resistor (0603)                                   |
| R5                 |     1 | 500 variable resistor                                      |
| R6-R9              |     4 | 75 ± 1% resistors (0402)                                   |
| R10                |     1 | 43.2 ± 1% resistor (0402)                                  |
| R11                |     1 | 86.6 ± 1% resistor (0402)                                  |
| TP2, TP3, J18, J19 |     4 | Test points Digi-Key 5000K-ND                              |
| U1                 |     1 | MAX3812USA+ 8-pin SO                                       |
| None               |     1 | PCB: MAX3812 EV kit circuit board, Rev B                   |

<!-- image -->

## MAX3812 Evaluation Kit

Features

- ♦ Fully Assembled and Tested
- ♦ Easy Selection of Output Slew Rate
- ♦ Adjustable Output Voltage Swing
- ♦ Outputs Designed for 75 Ω and 50 Ω Test Environments

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX3812EVKIT+ | 0°C to +85°C | 8 SO         |

## Quick Start

- 1) Set the output voltage swing to the standard swing levels by moving the shunt on JU1 to the side marked STD.
- 2) Set the output slew rate to high definition by moving the shunt on JU2 to the side marked HD.
- 3) Connect a differential signal source (50 Ω )  to  the data inputs (IN+, IN-). Set the signal amplitude to 1000mVP-P (differential) and the data rate to 1.485Gbps.
- 4) Use a 75 Ω cable to connect OUT+ (J4) to the 75 Ω input of a high-speed oscilloscope. Put a 50 Ω termination on OUT- (J3).
- 5) Connect a +3.3V power supply to VCC (J18) and the power-supply ground to GND (J19).
- 6) The signal should appear on the oscilloscope with approximate amplitude of 800mVP-P.

## MAX3812 Evaluation Kit

## Detailed Description

The MAX3812 EV kit simplifies evaluation of the MAX3812 cable driver. The EV kit provides the external components necessary to evaluate all the MAX3812 functions.

## Setting the Output-Voltage Swing

The external RSET resistor connected between VCC and the RSET pin controls the output-voltage swing. Typically the output voltage swing is set to 800mVP-P using the standard 750 Ω .  This  is  obtained  by  setting jumper JU1 to STD. For output-voltage swings other than 800mVP-P, set jumper JU1 to VAR and use the variable resistor R5 to set the desired output swing.

## Selection of Output Slew Rate

Jumper JU2 sets the output slew rate. Set jumper JU2 to  SD  for  data  rates  up  to  540Mbps,  and  HD  for  data rates greater than 540Mbps.

## Data Input Terminations

The EV kit has 50 Ω input traces with a 100 Ω differential termination. The data inputs are AC-coupled and can be directly connected to a 50 Ω source. If  the  input  is driven single-ended, terminate the other input with 50 Ω .

If  the  signal  source  has  75 Ω outputs, use a min-losspad (MLP) between the source and the data inputs. Increase the amplitude by approximately 7.5dB to compensate for the MLP.

## Data Output Terminations

The positive output (OUT+) is AC-coupled and can be directly connected to 75 Ω test equipment. The negative output (OUT-) is also AC-coupled and includes an onboard MLP so that it can be directly connected to 50 Ω test equipment. Output signals observed with OUT- are attenuated by approximately 7.5dB due to the impedance conversion through the MLP.

Typically the output is evaluated single-ended. For optimal performance the unused output should be properly terminated to keep the output loading balanced. Balance the loads by putting a 50 Ω termination on OUT- when evaluating OUT+, and putting a 75 Ω termination on OUT+ when evaluating OUT-.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3812 Evaluation Kit

<!-- image -->

Figure 1. MAX3812 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3812 Evaluation Kit

Figure 4. MAX3812 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3812 EV Kit PC Board Layout-Power Plane

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX3812 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5

## MAX3812 Evaluation Kit