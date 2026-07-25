<!-- lastmod 2022-08-02 -->
## General Description

The MAX3881 evaluation kit (EV kit) is an assembled demonstration board that provides easy evaluation of the MAX3881 2.488Gbps SDH/SONET 1:16 deserializer with clock recovery. The EV kit requires only one +3.3V supply and includes all the external components necessary to interface with CML inputs and PECL outputs. The board can be connected to the output of a limiting amplifier circuit (such as the MAX3866) and to the input of a PECL device (such as an overhead termination circuit).  A  signal  generator  or  stimulus  system can be used with an oscilloscope to evaluate the MAX3881's basic functionality.

| DESIGNATION                                                                             |   QTY | DESCRIPTION                                              |
|-----------------------------------------------------------------------------------------|-------|----------------------------------------------------------|
| C1, C2, C3, C6, C8, C15-C18, C23-C39                                                    |    26 | 0.1µF ±10% ceramic capacitors (0603)                     |
| C22                                                                                     |     1 | 0.1µF ±10% ceramic capacitor (0805)                      |
| C4, C5, C7, C12, C13, C14, C19, C20, C21                                                |     9 | 100pF ±10% ceramic capacitors (0402)                     |
| C9                                                                                      |     1 | 33µF ±10%, 10V tantalum capacitor Sprague 293D336X0010C2 |
| C10                                                                                     |     1 | 2.2µF ±10%, 10V tantalum capacitor AVX TAJB225K035       |
| C11                                                                                     |     1 | Leave site open                                          |
| R1                                                                                      |     1 | 2k Ω variable resistor                                   |
| R2, R3                                                                                  |     2 | 1k Ω ± 1% resistors (0402)                               |
| R4                                                                                      |     1 | 392 Ω ± 1% resistor (0402)                               |
| R5, R8, R15, R30, R33, R36, R39, R42, R46, R49, R51, R54, R57, R60, R63, R66, R69, R72  |    18 | 127 Ω ± 1% resistors (0402)                              |
| R7, R10, R17, R32, R35, R38, R41, R44, R45, R48, R53, R56, R59, R62, R65, R68, R71, R74 |    18 | 49.9 Ω ± 1% resistors (0402)                             |

## Component List

| DESIGNATION                                                                            |   QTY | DESCRIPTION                                  |
|----------------------------------------------------------------------------------------|-------|----------------------------------------------|
| R12, R13, R14, R18-R29, R75, R76, R77                                                  |    18 | 49.9 Ω termination resistors (not installed) |
| R6, R9, R16, R31, R34, R37, R40, R43, R47, R50, R52, R55, R58, R61, R64, R67, R70, R73 |    18 | 475 Ω ± 1% resistors (0402)                  |
| R11                                                                                    |     1 | Leave site open                              |
| D1                                                                                     |     1 | PC-mount LED                                 |
| J9, J10, J20, J22, J24, J25, J27, J29, J31, J33, J35, J37, J39, J41-J45                |    18 | SMB connectors (PC mount)                    |
| J1-J4                                                                                  |     4 | SMA connectors (side mount)                  |
| L1, L2, L3                                                                             |     3 | 56nH inductors Coilcraft 0805CS-560XKBC      |
| GND, +3.3V, TP1                                                                        |     3 | Test points                                  |
| U1                                                                                     |     1 | MAX3881ECB 64-pin TQFP                       |
| JU6                                                                                    |     1 | 3-pin header (0.1in centers)                 |
| JU7                                                                                    |     1 | 2-pin header (0.1in centers)                 |
| JU6, JU7                                                                               |     2 | Shunts                                       |
| None                                                                                   |     1 | MAX3881 EV kit circuit board, Rev C          |
| None                                                                                   |     1 | MAX3881 data sheet                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ +3.3V Operation
- ♦ On-Board Output Terminations

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3881EVKIT | -40°C to +85°C | 64 TQFP-EP*  |

*Exposed pad

## MAX3881 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 650-526-8393 | 650-965-1644 |

Note: Please indicate that you are using the MAX3881 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1)  Apply +3.3V to the VCC pin. Connect power-supply ground to the GND pin.
- 2)  Select between the serial-data inputs, pins 2 and 3 of JU6 (SDI EN), or the system loopback inputs, pins 1 and 2 of JU6 (SLBI EN), with a 2-pin jumper.
- 3)  Verify that the shunt across jumper JU7 is in place.
- 4)  Connect a 2.488Gbps nonreturn-to-zero (NRZ) data signal (50mVp-p &lt;VIN &lt;800mVp-p differential) to the selected inputs with 50 Ω cables.
- 5)  Connect the parallel output to an oscilloscope or other test equipment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The MAX3881 EV kit simplifies evaluation of the MAX3881, 1:16 deserializer with clock recovery. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with 3.3V CML inputs and PECL outputs.

## CML Inputs

The input terminals for the differential 2.488Gbps serialdata inputs (SDI+, SDI-, SLBI+, SLBI-) are AC-coupled to  on-board SMA connectors. Limiting amplifiers with differential output swings between 50mVp-p and 800mVp-p can be connected directly to the SMA connectors.

## Phase Adjustment

Internal phase adjustment is available on the MAX3881 EV kit. Phase adjust resistor R1, although not required, can be used to shift the sampling edge of the recovered clock relative to the data eye. Ensure that JU7 is removed when adjusting PHADJ.

## Loss-of-Lock Monitor

Phase-locked loop (PLL) frequency lock conditions can be monitored at the high-impedance loss-of-lock ( LOL ) test point. A TTL high (LED off) indicates PLL frequency lock, while a TTL low (LED on) indicates a loss-of-lock condition. Note that the LOL circuitry  will  not  detect  a loss-of-power condition.

## \_\_\_\_\_\_\_\_\_\_\_Applications Information

## Connecting PECL Outputs to 50 Ω Oscilloscopes

PECL outputs are designed to be terminated with 50 Ω to  (VCC -  2V).  Because most oscilloscopes provide a termination of 50 Ω to  ground, a level-shift network is incorporated on the evaluation board to allow connection of the parallel outputs of the EV kit directly to 50 Ω equipment. The level-shift network also provides a 50 Ω impedance for matching the source impedance to the transmission line. In addition to the level-shifting network, 50 Ω terminations are located at the end of each output line (underneath the SMB connectors) in order to properly terminate unused outputs.

## Terminating Unused Outputs

Because most labs are not equipped to test all 16 parallel outputs at once, pads are available beneath each SMB connector to place 50 Ω termination resistors. In addition to terminating the unconnected transmission lines (which may act as high-frequency stubs if not terminated), these 50 Ω termination resistors complete the Thèvenin equivalent load of 50 Ω to (VCC - 2V) required by the PECL outputs. Note that the Thèvenin equivalent terminations are designed for use with a +3.3V supply. While performance may not be severely degraded by having some improperly terminated outputs, some measurements (such as supply current) will be affected.

## Exposed-Pad Package

The 64-pin TQFP-EP incorporates features that provide a very low thermal-resistance path for heat removal from the IC. The pad is electrical ground on the MAX3881 and must be soldered to the circuit board for proper thermal and electrical performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3881 Evaluation Kit

<!-- image -->

Figure 1. MAX3881 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3881 Evaluation Kit

Figure 2. MAX3881 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3881 Evaluation Kit

<!-- image -->

Figure 3. MAX3881 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3881 Evaluation Kit

Figure 4. MAX3881 EV Kit PC Board Layout-Solder Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3881 Evaluation Kit

Figure 5. MAX3881 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3881 Evaluation Kit

Figure 6. MAX3881 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8