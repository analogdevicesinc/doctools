<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8625A evaluation kit (EV kit) is a fully assembled and tested PCB demonstrating the MAX8625A step-up/step-down switching regulator. The MAX8625A utilizes Maxim's proprietary H-bridge topology that provides seamless transitions through all converter operating modes without the glitches commonly seen with other similar devices. The MAX8625A EV kit converts a 2.5V to 5.5V DC input to a preprogrammed 3.3V output capable of providing up to 800mA. The output voltage is  also  programmable from 1.25V to 4.2V by use of a resistor-divider. The MAX8625A EV kit provides onboard jumper settings that allow programming one of two switching modes: fixed-frequency PWM (FPWM) or high-efficiency skip. Additional on-board jumpers allow enable or shutdown of the MAX8625A IC.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1-C4         |     4 | 22µF ±20%, 10V X5R ceramic capacitors (1206) Taiyo Yuden LMK316BJ226ML |
| C5            |     1 | 0.1µF ±10%, 16V X5R ceramic capacitor (0402) Taiyo Yuden EMK105BJ104KV |
| C6, C7        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0402) Taiyo Yuden LMK105BJ105KV  |
| JU1, JU2      |     2 | 3-pin headers Sullins PEC36SAAN Digi-Key S1012E-36-ND                  |
| L1            |     1 | 3.3µH inductor TOKO 1101AS-3R3M (DEA4012CK series)                     |
| R1, R2        |     0 | Not installed, resistors (0402) R1 is open; R2 is short (PCB trace)    |
| U1            |     1 | Step-up/down regulator (14 TDFN) Maxim MAX8625AETD+                    |
| -             |     1 | PCB: MAX8625A EVALUATION KIT+                                          |

Features

- ♦ 2.5V to 5.5V Input-Voltage Range
- ♦ 3.3V Preset Output Voltage
- ♦ Programmable Output Voltage from 1.25V to 4.2V
- ♦ Glitch-Free Step-Up/Step-Down Transitions
- ♦ Selectable Switching Modes FPWM Mode High-Efficiency Skip Mode
- ♦ Soft-Start
- ♦ Output Overload Protection
- ♦ Thermal Protection
- ♦ Small 3mm x 3mm, 14-Pin TDFN IC Package
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8625AEVKIT+ | EV Kit |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE                    |
|---------------------------|--------------|----------------------------|
| Digi-Key Corp.            | 800-344-4539 | www.digikey.com            |
| Sullins Electronics Corp. | 760-744-0125 | www.sullinselectronics.com |
| Taiyo Yuden               | 408-573-4150 | www.t-yuden.com            |
| TOKO America, Inc.        | 408-432-8281 | www.tokoam.com             |

Note: Indicate that you are using the MAX8625A when contacting these component suppliers.

1

## MAX8625A Evaluation Kit

## Quick Start

## Required Equipment

- 3) Connect the positive input of the DMM to the VOUT pad on the EV kit, and the negative input of the DMM to the GND pad on the EV kit to measure the output voltage at VOUT.
- 4) Connect an 800mA electronic load and ammeter between the VOUT and GND pads on the EV kit.
- 5) Ensure that shunts are placed on pins 2-3 of jumpers JU1 and JU2 to enable the IC in FPWM mode, as shown in Table 1.
- 6) Turn on the power supply.
- 7) Verify  that  the  voltage  at  VOUT  is  approximately 3.3V.
- 8) Sweep the voltage of the power supply between 2.5V to 5.5V and verify that the voltage at VOUT is approximately 3.3V over the entire input range.

When evaluation of the MAX8625A EV kit is completed, use the following steps to power down the EV kit:

- 1) Turn off the power supply.
- 2) Disconnect power supply, cables, and test leads from the EV kit.
- MAX8625A EV kit
- One variable DC power supply capable of supplying 2.5V to 5.5V at 2.5A
- One digital multimeter (DMM)
- One ammeter
- One electronic load capable of sinking 800mA

## Procedure

The MAX8625A EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the variable DC power supply to 3.3V. Turn off the power supply. Caution: Do not turn on the power supply until all connections are completed.
- 2) Connect the positive lead of the power supply to the VIN pad on the EV kit, and the negative lead of the power supply to the GND pad on the EV kit.

## Table 1. Jumper Settings

| JUMPER   | FUNCTION                                                                                                                                                                                                                                                                                                                           |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Install a shunt across pins 2-3 to connect SKIP to IN for FPWM mode. Install a shunt across pins 1-2 to connect SKIP to GND for skip mode. Do not switch the converter from FPWM (position 2-3) to SKIP (position 1-2) or vice versa on the fly. The MAX8625A is not designed for dynamic transitions between skip and FPWM modes. |
| JU2      | Install a shunt across pins 2-3 to enable the IC. Install a shunt across pins 1-2 to disable the IC. Enable the MAX8625A after the supply voltage is above UVLO. Tying theON pin to the supply and then ramping up the supply voltage is not recommended.                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8625A Evaluation Kit

Figure 1. MAX8625A EV Kit Schematic

<!-- image -->

## Detailed Description of Hardware

## Setting the Output Voltage

The MAX8625A EV kit output voltage is preset at 3.3V, but can be adjusted from 1.25V to 4.2V by the selection of R1 and R2 resistance values (Figure 1). To program the output voltage, follow the procedure below:

- 1) Select a 100k Ω resistance value for R2.
- 2) Determine the value of R1 from the following equation:

<!-- formula-not-decoded -->

where VFB = 1.25V and VOUT is the desired output regulation voltage. VOUT must be between 1.25V and 4.2V.

- 3) Cut the trace shorting the pads of resistor R2.
- 4) Install resistors R1 and R2 on the MAX8625A EV kit.

Note: Adjusting the output voltage affects the maximum output current available from the MAX8625A EV kit and may require changing the value of inductance of L1. Refer to the Applications Information section in the MAX8625A IC data sheet for more information.

<!-- image -->

## Selecting the Switching Mode

The MAX8625A EV kit has two selectable switching modes:

- 1) Fixed-frequency PWM (FPWM) mode
- 2) High-efficiency skip mode

## Fixed-Frequency PWM Mode (FPWM)

In FPWM mode, the MAX8625A operates at a constant 1MHz switching frequency with no pulse skipping. This scheme is desirable in noise-sensitive applications because the output ripple frequency spectrum is minimized and predictable. FPWM mode consumes higher supply current at light loads due to constant switching.

## High-Efficiency Skip Mode

In  skip  mode, the IC switches only as necessary to maintain the output in regulation at light loads, but still operates with fixed-frequency PWM at medium and heavy loads. This operation maximizes light-load efficiency and reduces the input quiescent current.

To select the switching mode, shunt jumper JU1 on the MAX8625A EV kit as indicated in Table 1.

## Selecting Shutdown Mode

To place the MAX8625A in shutdown mode, shunt pins 1-2 of jumper JU2 on the MAX8625A EV kit. To enable the MAX8625A, shunt pins 2-3 of jumper JU2 on the MAX8625A EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8625A Evaluation Kit

Figure 2. MAX8625A EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8625A Evaluation Kit

<!-- image -->

Figure 3. MAX8625A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8625A Evaluation Kit

Figure 4. MAX8625A EV Kit PCB Layout-Solder Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8625A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 5/08            | Initial release                         | -               |
|                 1 | 11/08           | Modified the jumper settings in Table 1 | 2               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7