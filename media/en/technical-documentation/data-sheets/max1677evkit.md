<!-- lastmod 2022-08-02 -->
## General Description

The MAX1677 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate switching-regulator circuits. The first circuit  is  configured  for  a  +3.3V  main  output  and  +20V LCD bias voltage. It accepts inputs from +0.7V to +3.3V. The main +3.3V output supplies up to 350mA from a 2-cell input, or 140mA from a 1-cell input, while the LCD bias output supplies up to 12mA at +20V.

The second circuit converts a +0.7V to +3.3V battery voltage to a +3.3V main output and a -20V LCD bias voltage. The main +3.3V output supplies up to 350mA from a 2-cell input, or 140mA from a 1-cell input, while the LCD bias output supplies 10mA at -20V.

The MAX1677 features internal N-channel MOSFET switches, a synchronous rectifier, low-battery comparator, and selectable PFM/PWM mode. The MAX1677 EV kit provides low quiescent current and high efficiencyup to 95% for maximum battery life. Operation at 300kHz allows the use of tiny surface-mount inductors.

| DESIGNATION         |   QTY | DESCRIPTION                                                                      |
|---------------------|-------|----------------------------------------------------------------------------------|
| C1, C2, C10, C11    |     4 | 100µF, 10V low-ESR tantalum caps AVX TPSD107M010R0100 or Sprague 593D107X0010D2T |
| C3, C5, C13, C14    |     4 | 0.1µF ceramic capacitors                                                         |
| C4, C12             |     2 | 4.7µF, 35V tantalum capacitors AVX TPSC475M035R0600 or Sprague 595D475X0035C2T   |
| C8                  |     1 | 2.2µF, 25V ceramic capacitor United Chemi-Con/Marcon THCR30E1E225Z               |
| C16, C17            |     2 | 1µF, 16V ceramic capacitors Taiyo Yuden EMK316BJ105KL TDK C3216X7R1C105M         |
| C6, C7, C9, C15, D6 |     0 | Not installed                                                                    |
| D1, D3              |     2 | 20V, 0.5A Schottky diodes Motorola MBR0520LT3                                    |
| D2, D4, D5          |     3 | 40V, 0.5A Schottky diodes Motorola MBR0540T3                                     |

<!-- image -->

## Features

- ♦ +0.7V to MAINOUT Battery Input Voltage
- ♦ Dual Output Voltages +3.3V Main Output and +20V LCD Bias Output +3.3V Main Output and -20V LCD Bias Output
- ♦ All Outputs Also Adjustable with External Resistors
- ♦ Up to 350mA from 2-Cell Input (Main Output )
- ♦ Up to 140mA from 1-Cell Input (Main Output)
- ♦ Up to 12mA Output Current (LCD Bias Output)
- ♦ Internal N-Channel Switches and Synchronous Rectifier
- ♦ 1µA IC Shutdown Current
- ♦ 300kHz Switching Frequency
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1677EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                          |
|-------------------------|-------|------------------------------------------------------|
| L1, L3                  |     2 | 10µH inductors Sumida CR54-100                       |
| L2, L4                  |     2 | 10µH inductors Murata LQH4N100K04 TDK NLC32522T-100K |
| R3                      |     1 | 1.5M Ω ±5% resistor                                  |
| R4, R12                 |     2 | 100k Ω ±5% resistors                                 |
| R5, R13                 |     2 | 10 Ω ±5% resistors                                   |
| R11                     |     1 | 1.6M Ω ±5% resistor                                  |
| R1, R2, R6-R10, R14-R16 |     0 | Not installed                                        |
| U1, U2                  |     2 | MAX1677EEE                                           |
| JU1-JU6                 |     6 | 3-pin headers                                        |
| None                    |     6 | Shunts                                               |
| None                    |     1 | MAX1677 PC board                                     |
| None                    |     1 | MAX1677 data sheet                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1677 Evaluation Kit

## Component Suppliers

| SUPPLIER                 | PHONE        | FAX          |
|--------------------------|--------------|--------------|
| AVX                      | 803-946-0690 | 803-626-3123 |
| Dale-Vishay              | 402-564-3131 | 402-563-6418 |
| Motorola                 | 602-303-5454 | 602-994-6430 |
| Murata                   | 814-237-1431 | 814-238-0490 |
| Sprague                  | 603-224-1961 | 603-224-1430 |
| Sumida                   | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden              | 408-573-4150 | 408-573-4159 |
| TDK                      | 847-390-4373 | 847-390-4428 |
| United Chemi- Con/Marcon | 847-696-2000 | 847-696-9278 |

Note: Please indicate that you are using the MAX1677 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1677 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## +3.3V and +LCD Output

- 1) Connect a +1.1V to +3.3V supply to the VIN pad. Connect the ground to the GND pad. Note: The input voltage may drop as low as 0.7V after startup.
- 2) Connect voltmeters to the VOUT and +LCDOUT pads.
- 3) Verify  that  the  shunts  are  across  pins  2  and  3  on JU1, JU2, and JU3.
- 4) Turn on the power supply and verify that the main output is at +3.3V and the LCD bias output is at +20V.

## +3.3V and -LCD Output

- 1) Connect a +1.1V to +3.3V supply to the VIN pad. Connect the ground to the GND pad. Note: The input voltage may drop as low as 0.7V after start-up.
- 2) Connect voltmeters to the VOUT and -LCDOUT pads.
- 3) Verify  that  the  shunts  are  across  pins  2  and  3  on JU4, JU5, and JU6.
- 4) Turn on the power supply and verify that the main output is at +3.3V and the -LCD Bias output is at -20V.

For instructions on selecting the feedback resistors for other output voltages, refer to the Design Procedure section in the MAX1677 data sheet.

## Detailed Description

The MAX1677 EV kit contains two separate switchingregulator circuits. The first circuit provides a +3.3V main output and +20V LCD bias output. The second circuit  provides a +3.3V main output and -20V LCD bias output. Both circuits require a +0.7V to +3.3V input voltage range. The main +3.3V output supplies up to 350mA from a 2-cell input, or 140mA from a 1-cell input, while the LCD bias output supplies up to 12mA.

The main output voltage can also be adjusted from +2.5V to +5.5V with external resistors. The LCD output is also adjustable. The main boost converter has three operational modes: a low-power PFM mode, a highpower PWM mode, and a high-power PWM mode with the internal oscillator synchronized to an external clock.

## Jumper Selection

## Shutdown Mode

The MAX1677 EV kit features a shutdown mode that reduces the MAX1677 quiescent current to less than 1mA (typ), preserving battery life. The 3-pin headers, JU1 and JU4, select the shutdown mode for each circuit. Table 1 lists the selectable jumper options.

## Controlling the LCD Using LCDON Pin

LCDON is used to turn on the LCD bias voltage. Jumpers JU2 and JU5 control the LCDON pins for the +LCD and -LCD output circuits, respectively. The 3.3V outputs must also be on for the LCD outputs to operate. Table 2 lists the LCDON jumper options.

## Table 1. Jumper JU1/JU4 Functions

| SHUNT LOCATION   | ON PIN             | VOUT OUTPUT                           |
|------------------|--------------------|---------------------------------------|
| 1 & 2            | Connected to GND   | Shutdown mode, V OUT = V IN - V DIODE |
| 2 & 3            | Connected to V OUT | MAX1677 enabled, V OUT = +3.3V        |

## Table 2. Jumper JU2/JU5 Functions

| SHUNT LOCATION   | LCDON PIN          | LCDOUT OUTPUT                           |
|------------------|--------------------|-----------------------------------------|
| 1 & 2            | Connected to GND   | +LCDOUT = V IN - V DIODE , -LCDOUT = 0V |
| 2 & 3            | Connected to V OUT | +LCDOUT = +20V, -LCDOUT = -20V          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Operating Mode

The main boost converter has three operational modes: a low-power PFM mode; a high-power, low-noise PWM mode; and a high-power PWM mode with the internal oscillator synchronized to an external clock. The EV kit operates at 300kHz switching frequency and allows the use of small inductor values. The switching frequency can also be synchronized to an external clock ranging from 200kHz to 400kHz. The 3-pin headers JU3 and JU6 select the operating mode for each circuit. Table 3 lists the jumper options.

Table 3. Jumper JU3/JU6 Functions

| SHUNT LOCATION   | CLK/SEL PIN                        | OPERATING MODE                                                                                             |
|------------------|------------------------------------|------------------------------------------------------------------------------------------------------------|
| 1 & 2            | Connected to GND                   | Low-power mode, MAX1677 operates in the PFM mode.                                                          |
| 2 & 3            | Connected to V OUT                 | High-power, low-noise mode, MAX1677 operates in the PWM mode.                                              |
| Open             | CLK/SEL connect- ed to CLK/SEL pad | Synchronized PWM high- power mode, CLK/SEL pin is driven by an exter- nal clock between 200kHz and 400kHz. |

<!-- image -->

## MAX1677 Evaluation Kit

## Evaluating Other Output Voltages

The main output is set to +3.3V by grounding the feedback pins (FB) via PC traces shorting R2 and R10. To generate main output voltages other than +3.3V (+2.5V to +5.5V), cut the traces across R2 and R10 and select the external voltage divider resistors (R1, R2 or R9, and R10). Refer to Design Procedure section in the MAX1677 data sheet for instructions on selecting R1, R2 and R9, and R10.

The ±20V LCD bias output voltages are set with voltage dividers (R3, R4 or R11, and R12) at the LCD feedback pins (LCDFB). To generate LCD output voltages other than ±20V, refer to Setting the LCD Output Voltage section in the MAX1677 data sheet.

## Changing the LCD Current Limit

The LCD inductor current limit can be set to 225mA or 350mA. The EV kit is factory-configured for 350mA. To set the limit to 225mA, cut the PC trace shorting R17 or R18 and insert a 56k Ω resistor.  This  allows  the  use  of the smallest possible inductors for low-current displays. See the LCD Boost Converter section of the MAX1677 data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1677 Evaluation Kit

Figure 1. MAX1677 EV Kit Schematic (Positive LCD)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1677 Evaluation Kit

Figure 2. MAX1677 EV Kit Schematic (Negative LCD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1677 Evaluation Kit

Figure 3. MAX1677 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1677 Evaluation Kit

<!-- image -->

Figure 4. MAX1677 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1677 Evaluation Kit

Figure 5. MAX1677 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600