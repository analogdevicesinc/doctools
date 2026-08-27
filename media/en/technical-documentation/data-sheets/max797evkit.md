<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX797 evaluation kit (EV kit) is a preassembled and tested demonstration board that embodies the standard 3.3V application circuit. The board comes configured to accept battery voltages between 4.5V and 28V, but can be reconfigured for voltages between 4.5V and 30V by substituting MOSFETs with higher breakdown voltage ratings.

The standard board is guaranteed to deliver at least 3A of  load  current.  To  modify  the  load-current  capability, change the sense-resistor (R1) value and re-size the external components according to Table 1 in the MAX796/MAX797/MAX799 data sheet.

The main output voltage comes preset to 3.35V (nominal). To select 5V operation, move jumper J3 to position 1-2.  For  operation  in  adjustable  mode,  install  resistors R4 &amp; R5 and remove the jumper. There is a small PC trace jumper that shunts J3 on the board. This default  jumper  must  be  cut  apart  for  either adjustable-mode or fixed 5V operation. Don't operate the  circuit  if  a  jumper  or  resistor  divider  has  not  been installed, as this will damage the IC due to output overvoltage.

In addition to the standard components, the EV kit has some extra pull-up and pull-down resistors (R4-R8) to set default logic input levels. These resistors can usually be omitted in the final design.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- '

- Battery Range:  4.5V to 28V

- ' Load Capability:  3.3V at 3A

- ' Adjustable 2.5V to 6V Output (optional resistor divider)
- ' Precision 2.505V Reference Output
- ' Oscillator SYNC Input
- ' Low-Noise Mode Control Input

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| EV KIT         | V OUT        | BOARD TYPE    |
|----------------|--------------|---------------|
| MAX797EVKIT-SO | +3.3V or Adj | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_MAX797 EV Kit

<!-- image -->

1

## MAX797 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1, C11       |     2 | 22µF, 35V low-ESR capacitors AVX TPSE226M035R0300 Sprague 595D226X0035R2T                                  |
| C2            |     1 | Kemet T510 X 477(1) 006 AS 470µF, 0.030 Ω low-ESR capacitor                                                |
| C3, C8        |     2 | 0.1µF ceramic capacitors                                                                                   |
| C4            |     1 | 4.7µF, 16V tantalum capacitors Sprague 595D475X0016A2T                                                     |
| C5            |     1 | 0.33µF ceramic capacitor                                                                                   |
| C6            |     1 | 0.01µF ceramic capacitor                                                                                   |
| C21           |     0 | Open                                                                                                       |
| D1            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3 Motorola MBR0530                                   |
| D2            |     1 | 1A, 40V Schottky diode Motorola MBRS140T3 Nihon EC10QS04 International Rectifier 10BQ040                   |
| J1, J2        |     2 | 2-pin headers                                                                                              |
| J3, J4        |     0 | Leave these sites open                                                                                     |
| L1            |     1 | 10µH, 2A inductor Sumida CDRH-125-100 (shielded) Coiltronics UP2-100 Coilcraft DO3316-103                  |
| Q1, Q2        |     2 | 5A, 30V logic-level N-channel MOSFETs Motorola MMSF5N03HD International Rectifier IRF7201 Siliconix Si9410 |
| R1            |     1 | 0.025 Ω sense resistor Dale WSL-2010-R025-F IRC LR2010-R025-F                                              |
| R2, R3        |     0 | Unused reference designators                                                                               |
| R4, R5        |     0 | Leave these sites open                                                                                     |
| R6, R8        |     2 | 1M Ω , 5% resistors                                                                                        |
| R7            |     1 | 100k Ω , 5% resistor                                                                                       |
| U1            |     1 | Maxim MAX797CSE                                                                                            |

See Table 2 in the MAX796/MAX797/MAX799 data sheet for component supplier phone/fax numbers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Connect a stiff (20W or better) bench power supply to the VIN and GND pads found at the edge of the board.
- 2) Check that the jumpers are set correctly (J1 and J2 installed, J3 set to position 2-3, J4 set to 1-2).
- 3) Turn up the input voltage to somewhere between 4.75V and 28V.
- 4) Verify that the main output is regulating at 3.3V. Normal full-load regulation is -2.5% while keeping the output in tolerance. If the measured error is higher, there may be drops in the wiring or ground.
- 5) Ensure that the voltmeter is sensing directly at the output and ground pads of the PC board.

To observe normal PWM switching action, place a 1A load on the main output and observe the switching node (device LX pin) with an oscilloscope while varying the  input  voltage.  Without  a  load,  the  switching  waveforms are intermittent and difficult to trigger on, and it may appear that the board is not working.

Jumper J4 comes installed for 300kHz operation. Component values may need to be changed if 150kHz operation is selected; see the Design Procedure section  in  the  MAX796/MAX797/MAX799 data sheet. The oscillator can be synchronized to an external clock signal  by  driving  the  SYNC  pad  with  a  pulse  train  of  5V amplitude.

## Table 1. Pull-Up/Down Resistors

| RESISTOR   | FUNCTION                                                                      |
|------------|-------------------------------------------------------------------------------|
| R4, R5     | Adjustable-mode resistor dividers, not installed. V OUT = 2.505V (1 + R4/R5). |
| R6         | 1M Ω , low-noise-mode pull-up resistor, usu- ally shorted out (SKIP to GND).  |
| R7         | 100k Ω SYNC pull-up resistor, usually short- ed out (SYNC to REF).            |
| R8         | 1M Ω SHDN pull-down resistor, usually shorted out (SHDN to V+).               |

## Table 2. Jumper Connections

| JUMPER   | FUNCTION                                                              |
|----------|-----------------------------------------------------------------------|
| J1       | On/off control. Remove to force shutdown mode.                        |
| J2       | Low-noise mode select. Remove to force low-noise mode.                |
| J3       | Output voltage select. Install in position 1-2 for 5V, 2-3 for 3.3V.  |
| J4       | Frequency select. Install in position 1-2 for 300kHz, 2-3 for 150kHz. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. MAX797 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3

## MAX797 Evaluation Kit

<!-- image -->

Figure 2. MAX797 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX797 EV Kit PC Board Layout-Component Side

Figure 3. MAX797 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX797 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600