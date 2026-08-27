<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX8884 Evaluation Kit

## Evaluates:  MAX8884Y/MAX8884Z

## General Description

The MAX8884 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  demonstrates  the  highly  integrated  MAX8884Y  step-down  DC-DC  converter  and  dual, 300mA,  low-dropout  (LDO)  linear  regulator.  The  stepdown  output  voltage  is  pin  selectable  between  1.2V and  1.8V  and  provides  guaranteed  output  current  of 700mA. Dual low-noise LDOs are also integrated in the MAX8884Y/MAX8884Z.  The  MAX8884  EV  kit  can  also evaluate  the  MAX8884Z.  To  evaluate  the  MAX8884Z, order a free sample along with the EV kit.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                        |
|----------------|-------|----------------------------------------------------------------------------------------------------|
| C1, C3, C5, C6 |     4 | 2.2 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61C225K or Taiyo Yuden LMK107BJ225K |
| C2             |     1 | 4.7 F F Q 10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C475K or Taiyo Yuden EMK212BJ475K  |
| C4             |     1 | 0.033 F F Q 10%, 16V X5R ceramic capacitor (0402) Murata GRM155R71C333K                            |
| JU1-JU4        |     4 | 3-pin headers Sullins PTC36SAAN Digi-Key S1012-36-ND                                               |
| L1             |     1 | 2.2 F H, 1.3A, 80m I inductor FDK MIPF2520D2R2 (2.5mm × 2mm × 1mm)                                 |
| L2             |     1 | 1 F H, 1.4A, 80m I inductor Taiyo Yuden CKP2520 1R0M (2.5mm × 2mm × 1mm)                           |
| R1             |     0 | Not installed, resistor (PCB short)                                                                |
| U1             |     1 | Step-down DC-DC converter and dual LDO linear regulators (16 CSP) Maxim MAX8884YEREKE+T            |
| -              |     4 | Shunts (see Table 1) Digi-Key S900-ND or equiva- lent                                              |
| -              |     1 | PCB: MAX8884 EVALUATION KIT+                                                                       |

Features

- S Step-Down Converter

Pin-Selectable Output Voltage (1.2V/1.8V) 2MHz (MAX8884Y) or 4MHz (MAX8884Z) Switching Frequency Low Output-Voltage Ripple 700mA Output Drive Capability Simple Logic ON/OFF Control Tiny External Components

- S Dual Low-Noise LDOs

Pin-Selectable Output Voltage (LDO1) Low 26µVRMS (typ) Output Noise High 65dB (typ) PSRR Guaranteed 300mA Output Drive Capability Individual ON/OFF Control

- S Tiny External Components
- S Low 0.1µA Shutdown Current
- S 2.7V to 5.5V Supply Voltage Range
- S Thermal Shutdown
- S Tiny, 2mm x 2mm x 0.65mm CSP Package (4x4 Grid)
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8884EVKIT+ | EV Kit |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

## MAX8884 Evaluation Kit

## Evaluates:  MAX8884Y/MAX8884Z

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| FDK Corp.                              | 408-432-8331 | www.fdk.co.jp               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |

Note: Indicate that you are using the MAX8884 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- U Variable  6V  power  supply  capable  of  delivering 700mA (referred to as PS1)
- U One voltmeter
- U Load resistors or electronic loads capable of 700mA

## Procedure

The  MAX8884  EV  kit  is  a  fully  assembled  and  tested surface-mount  PCB.  Follow  the  steps  below  to  verify board operation:

- 1) Place  the  JU1,  JU2,  and  JU3  shunts  across  pins 1-2 to enable the step-down converter, LDO1, and LDO2 outputs.
- 2) Place the JU4 shunt across pins 1-2 to select 1.8V for  the  step-down  output  and  2.8V  for  the  LDO1 output.
- 3) Preset PS1 to 3.6V. Turn off the power supply. Do not  turn  on  the  power  supply  until  all  connections are completed.
- 4) Connect the positive lead of the PS1 power supply to the IN1 and IN2 pad. Connect the negative lead of the PS1 power supply to the PGND pad.
- 5) Turn on the power supply.
- 6) Verify that the voltage is approximately 1.8V at the OUT pad.
- 7) Verify that the voltage is approximately 2.8V at the LDO1 pad.
- 8) Verify that the voltage is approximately 2.8V at the LDO2 pad. Turn off the power supply.
- 9) Change the JU4 shunt from pins 1-2 to pins 2-3 to change  the  step-down  and  LDO1  output  voltage. Turn on the power supply.
- 10) Verify that the voltage is approximately 1.2V at the OUT pad.
- 11) Verify that the voltage is approximately 1.8V at the LDO1 pad.

## Detailed Description of Hardware

## Step-Down Converter

The  step-down  converter  delivers  700mA  with  either 1.2V or 1.8V selectable output voltage using VSEL (see Table 1). A hysteretic PWM control scheme ensures high efficiency,  fast  switching,  fast-transient  response,  lowoutput voltage ripple, and tiny external components.

## LDO1 and LDO2

Dual  300mA low-noise,  high-PSRR  low-dropout  regulators (LDOs) are integrated in the MAX8884Y/MAX8884Z. The LDO1 output voltage is determined by the status of jumper JU4, VSEL (see Table 1). The LDO2 output voltage is preset to 2.8V.

Smaller  output  capacitors  can  be  used  for  LDO1  and LDO2 if they are used at less than full-load capability. Refer  to  the  MAX8884Y/MAX8884Z  IC  data  sheet  for more information.

## Shutdown Mode

The step-down converter, LDO1, and LDO2 are individually enabled or disabled with jumpers JU2, JU3, and JU1 (Table 1).

When  the  step-down  and  LDOs  are  all  in  shut  down, the MAX8884Y/MAX8884Z enter a very low-power state, where the input current drops to 0.1 F A (typ).

## Table 1. Jumper Function (JU1-JU4)

| JUMPER   | LABEL   | SHUNT POSITION              | SHUNT POSITION               |
|----------|---------|-----------------------------|------------------------------|
| JUMPER   | LABEL   | 1-2                         | 2-3                          |
| JU1      | LDO2_EN | Enable LDO2                 | Disable LDO2                 |
| JU2      | BUCK_EN | Enable step- down converter | Disable step- down converter |
| JU3      | LDO1_EN | Enable LDO1                 | Disable LDO1                 |
| JU4      | VSEL    | V OUT = 1.8V, V LDO1 = 2.8V | V OUT = 1.2V, V LDO1 = 1.8V  |

## MAX8884 Evaluation Kit

## Evaluates:  MAX8884Y/MAX8884Z

## Thermal Shutdown

Thermal  shutdown  limits  total  power  dissipation  in the  MAX8884Y/MAX8884Z.  If  the  junction  temperature  exceeds  +160 N C,  thermal-shutdown  circuitry  turns off  the  IC,  allowing  it  to  cool.  The  IC  turns  on  and begins soft-start after the junction temperature cools by +20 N C. This results in a pulsed output during continuous thermal-overload conditions.

## Evaluating the MAX8884Z

To evaluate the MAX8884Z,  carefully remove  the MAX8884Y (U1) and install the MAX8884Z. The inductor L1 also needs to be replaced by the extra inductor (L2) on the EV kit.

Figure 1. MAX8884 EV Kit Schematic

<!-- image -->

## MAX8884 Evaluation Kit

## Evaluates:  MAX8884Y/MAX8884Z

<!-- image -->

Figure 2. MAX8884 EV Kit Component Placement

Figure 3. MAX8884 EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 4. MAX8884 EV Kit PCB Layout-Bottom Layer

<!-- image -->

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## MAX8884 Evaluation Kit

## Evaluates:  MAX8884Y/MAX8884Z