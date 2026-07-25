<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX796 evaluation kit (EV kit) is a preassembled and tested demonstration board that generates 5V and 15V. It features a flyback transformer rather than a simple inductor, providing the extra 15V output with very little added cost. This loosely regulated 15V output is normally post-regulated to 12V with a linear regulator such as the MAX667, in order to generate VPP programming voltages for flash memory and PCMCIA sockets. The board comes configured to accept battery voltages between 6.5V and 28V, but can be reconfigured for voltages between 5.7V and 30V by reducing the expectation on secondary load-current capability at low voltages (60mA) and substituting MOSFETs with higher breakdown voltage ratings.

The standard board is guaranteed to deliver at least 3A of load current on the main output and a 120mA minimum on the secondary output (VSEC &gt; 13V). To modify the load-current capability, change the sense-resistor (R1) value and re-size the external components according to the Design Procedure in the MAX796/MAX797/ MAX799 data sheet.

The main output voltage comes preset to 5.08V (nominal). To select 3.3V operation, move jumper J2 to position 2-3. For operation in adjustable mode, install resistors R4 &amp; R5 and remove the jumper. There is a small PC trace jumper that shunts J2 on the board. This default  jumper  must  be  cut  apart  for  either adjustable-mode or fixed 3.3V operation. Don't operate the circuit if  a  jumper  or  resistor  divider  has  not been installed, as this will damage the IC due to output overvoltage. Be sure to change the transformer turns ratio  if  the  secondary feedback resistor divider is changed.

In addition to the standard components, the EV kit has some extra pull-up and pull-down resistors (R2-R8) to set default logic input levels. These resistors can usually be omitted in the final design. There is also an optional  HF  noise  filter  on  the  current-sense  leads  (R6  and C9) that may be needed with some transformer types. If the main output becomes noisy when the secondary output is heavily loaded, the noise filter should be left installed.

The MAX796 EV kit can be used to evaluate the MAX799 IC by replacing the IC and re-wiring the transformer secondary. Changes needed include connecting the SECFB resistor divider to REF instead of GND, changing the transformer, and reversing the secondary rectifier (D3) and filter capacitor (C7) polarities.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- '

- Battery Range:  6.5V to 28V

- ' Load Capability:  +3.3V at 3A

- +15V at 150mA

- ' Precision 2.505V Reference Output

- ' Oscillator SYNC Input

- ' Secondary Winding Regulation

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| EV KIT         | V OUT           | BOARD TYPE    |
|----------------|-----------------|---------------|
| MAX796EVKIT-SO | +5V/+15V (dual) | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_MAX796 EV Kit

<!-- image -->

1

## MAX796 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1, C11       |     2 | 22µF, 35V low-ESR capacitors AVX TPSE226M035R0300 Sprague 595D226X0035R2T                                  |
| C2, C21       |     2 | 220µF, 10V low-ESR capacitors 0.075 Ω max Sprague 594D227X0010R2T                                          |
| C3, C8        |     2 | 0.1µF ceramic capacitors                                                                                   |
| C4            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2T                                                      |
| C5            |     1 | 0.33µF ceramic capacitor                                                                                   |
| C6            |     1 | 0.01µF ceramic capacitor                                                                                   |
| C7            |     1 | 22µF, 25V low-ESR capacitor AVX TPSD226M025D0200 Sprague 595D226X0025D2T                                   |
| C9            |     1 | 4700pF ceramic capacitor                                                                                   |
| C10           |     0 | Leave this site empty                                                                                      |
| D1            |     1 | 1A, 40V Schottky diode Motorola MBRS140T3 Nihon EC10QS04 International Rectifier 10BQ040                   |
| D2            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3 Motorola MBR0530                                   |
| D3            |     1 | 1A, 100V fast-recovery diode Nihon EC11FS1 Motorola MBRS1100T3                                             |
| D4            |     1 | 250mW, 18V zener diode Central Semiconductor CMPZ5248B Motorola MMBZ5248B                                  |
| Q1, Q2        |     2 | 5A, 30V logic-level N-channel MOSFETs Motorola MMSF5N03HD International Rectifier IRF7201 Siliconix Si9410 |
| R1            |     1 | 0.020 Ω sense resistor Dale WSL-2010-R020-F IRC LR2010-R020-F                                              |
| R2            |     1 | 210k Ω , 1% resistor                                                                                       |
| R3            |     1 | 49.9k Ω , 1% resistor                                                                                      |
| R4, R5        |     0 | Leave these sites open                                                                                     |
| R6            |     1 | 22 Ω , 5% resistor                                                                                         |
| R7            |     1 | 100k Ω , 5% resistor                                                                                       |
| R8            |     1 | 1M Ω , 5% resistor                                                                                         |
| T1            |     1 | Transformer (1:2.2 turns ratio) Dale LPE-6562-A092 Transpower TTI-5870                                     |
| U1            |     1 | Maxim MAX796CSE                                                                                            |

See Table 2 in the MAX796/MAX797/MAX799 data sheet for component supplier phone/fax numbers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Connect a stiff (20W or better) bench power supply to the VIN and GND pads found at the edge of the board.
- 2) Check that the jumpers are set correctly (J1 installed, J2 and J3 both set to position 1-2).
- 3) Turn up the input voltage to somewhere between 4.75V and 28V.
- 4) Verify  that  the  main  output  is  regulating  at  5V,  and that  the  secondary output is at 15V or so. Normal full-load regulation is -2.5% while keeping the main output in tolerance. If the measured error is higher, there may be drops in the wiring or ground.
- 5) Ensure that the voltmeter is sensing directly at the output and ground pads of the PC board.

To observe normal PWM switching action, place a 1A load on the main output and observe the switching node (device LX pin) with an oscilloscope while varying the  input  voltage.  Without  a  load,  the  switching  waveforms are intermittent and difficult to trigger on, and it may appear that the board isn't working.

Jumper J3 comes installed for 300kHz operation. Component values may need to be changed if 150kHz operation is selected; see the Design Procedure section in  the  MAX796/MAX797/MAX799 data sheet. The oscillator can be synchronized to an external clock signal by driving the SYNC pad with a pulse train of 5V amplitude.

## Table 1. Pull-Up/Down Resistors

| RESISTOR   | FUNCTION                                                                      |
|------------|-------------------------------------------------------------------------------|
| R4, R5     | Adjustable-mode resistor dividers, not installed. V OUT = 2.505V (1 + R4/R5). |
| R6         | Current-sense noise filter resistor (optional).                               |
| R7         | 100k Ω SYNC pull-up resistor, usually short- ed out (SYNC to REF).            |
| R8         | 1M Ω SHDN pull-down resistor, usually short- ed out (SHDN to V+).             |

## Table 2. Jumper Connections

| JUMPER   | FUNCTION                                                              |
|----------|-----------------------------------------------------------------------|
| J1       | On/off control. Remove to force shutdown mode.                        |
| J2       | Output voltage select. Install in position 1-2 for 5V, 2-3 for 3.3V.  |
| J3       | Frequency select. Install in position 1-2 for 300kHz, 2-3 for 150kHz. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX796 EV Kit Schematic

<!-- image -->

Figure 2. MAX796 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3

## MAX796 Evaluation Kit

Figure 3. MAX796 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX796 EV Kit PC Board Layout-Solder Side

<!-- image -->

4

Figure 4. MAX796 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX796 EV Kit PC Board Layout-Interior Groundplane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_