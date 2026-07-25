<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8685C evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the MAX8685C/MAX8685D xenon flash charger family. The MAX8685C EV kit operates from a 2.5V to 5.5V supply and charges a 35µF capacitor to 300V. Battery voltages as low as 1.5V can be used to supply the inductor primary current. The MAX8685C/MAX8685D offer fixed peak primary current limits of 1A and 1.6A, respectively. An LED indicator on the EV kit lights up when the initial charging cycle is complete.

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J105K or equivalent    |
| C2            |     1 | 10µF ±10%, 16V X5R ceramic capacitor (0805) Taiyo Yuden EMK212BJ106K or equivalent |
| C3            |     1 | 35µF ±20%, 330V photoflash aluminum electrolytic capacitor Rubycon 330FW35M        |
| C4            |     0 | Not installed                                                                      |
| C5            |     1 | 0.022µF ±10%, X7R 630V ceramic capacitor (1206) Taiyo Yuden SMK316BJ223K           |

Features

- ♦ Charges 35µF to 300V
- ♦ EV Kit Includes Xenon Flash Tube, IGBT, and Trigger Transformer
- ♦ No Inrush Current
- ♦ Short-Circuit Protection
- ♦ Robust Architecture Allows Use of Low-Cost Transformers
- ♦ High Accuracy Not Dependent on Transformer Turns Ratio
- ♦ Automatic Refresh Mode Draws Minimal Quiescent Current
- ♦ Charge-Done Indicator
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8685CEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                    |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------|
| C6            |     1 | 3300pF ±10%, 50V X5R ceramic capacitor (0402) Murata GRM155R71H332K or equivalent                                              |
| D1            |     1 | Yellow LED (0603) Panasonic LNJ412K84RA                                                                                        |
| D2            |     1 | Dual-series diode (SOT23) Central Semiconductor CMPD2005S or equivalent                                                        |
| FT1           |     1 | Trim xenon 1.5 FTA PerkinElmer DTS TrimXel.5FTA                                                                                |
| JU1           |     1 | 2-pin header 1 x 36-pin header, 0.1in centers (comes in 1 x 36-pin strips, cut to fit) Sullins PEC36SAAN Digi-Key S1012E-36-ND |

1

## MAX8685C Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| Q1            |     1 | Insulated gate bipolar transistor (IGBT) Renesas CY25CAH-8F Renesas RJP4002ANS          |
| R1, R2        |     2 | 124k Ω ±1% resistors (1206), lead free                                                  |
| R3            |     1 | 1k Ω ±1% resistor (0402), lead free                                                     |
| R4            |     1 | 10 Ω ±1% resistor (0402), lead free                                                     |
| R5, R6        |     2 | 402 Ω ±1% resistors (0402), lead free                                                   |
| R7A, R7B      |     2 | 499k Ω ±1% resistors (1206), lead free                                                  |
| R8-R13        |     6 | 24.9k Ω ±1% resistors (1206), lead free                                                 |
| SW1, SW2      |     2 | 250VAC, 2A SPDT switches (ON-OFF-ON) Mountain Switch 108-1MS1T6B1M2QE-EVX or equivalent |

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| SW3           |     1 | Momentary pushbutton N.O. switch Panasonic EVQ-PHP03T      |
| T1            |     1 | Transformer TDK LDT565630T-011 Tokyo Coil TTRN-SU20S-00 1T |
| T2            |     1 | Transformer Tokyo Coil TS-F45B-1                           |
| U1            |     1 | MAX8685CETA+ (8-pin TDFN-EP, 2mm x 3mm)                    |
| -             |     1 | PCB: MAX8685C Evaluation Kit                               |

## Component Suppliers

| SUPPLIER                  | PHONE          | WEBSITE                        |
|---------------------------|----------------|--------------------------------|
| Central Semiconductor     | 631-435-1110   | www.centralsemi.com            |
| Panasonic Corp.           | 714-373-7939   | www.panasonic.com              |
| PerkinElmer, Inc.         | 781-663-6900   | www.perkinelmer.com            |
| Philips/nxp Semiconductor | 408-474-8142   | www.semiconductors.philips.com |
| Renesas Technology Corp.  | 408-382-7500   | www.renesas.com                |
| Rubycon Corp.             | 408-467-3864   | www.rubycon.com                |
| Taiyo Yuden               | 408-573-4150   | www.t-yuden.com                |
| TDK Corp.                 | 847-803-6100   | www.component.tdk.com          |
| Tokyo Coil Engineering    | 81-426-56-6262 | www.tokyo-coil.co.jp           |

Note:

Indicate that you are using the MAX8685C when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

## Quick Start

- 8) Connect the negative terminal of the voltmeter to PGND.

## Recommended Equipment

- 2.5V to 5.5V power supply capable of delivering 2A
- Voltmeter capable of measuring at least 300V

## Procedure

The MAX8685C EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Lethal voltages are present in this circuit.

- 1) Before connecting the EV kit, verify that the output capacitor is discharged. To discharge the output capacitor, set SW2 to the discharge position (Figure 1). Wait at least 30s before proceeding.
- 2) Verify that SW1 is in the disable position and that a shunt is shorting JU1.
- 3) Turn on the power supply and preset to the desired voltage between 2.5V and 5.5V.
- 4) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 5) Connect the positive terminal of the power supply to the EV kit pad labeled BATT.
- 6) Connect the negative terminal of the power supply to the EV kit pad labeled PGND.
- 7) Connect the positive terminal of the voltmeter to OUT.
- 9) Turn on the power supply.
- 10) Set SW2 to the open position (Figure 1) to disconnect the discharge resistors.
- 11) Set SW1 to the enable position to turn on the IC.
- 12) After a few seconds (depending on the supply voltage), verify that the LED lights up, indicating the charge is complete.
- 13) Verify that the voltmeter reads 300V.
- 14) Push SW3 and verify that the flash tube has flashed.

When evaluation of the MAX8685C EV kit is completed, use the following steps to power down the EV kit:

- 1) Set SW1 to the upward position (Figure 1) to disable the IC.
- 2) Turn off the power supply.
- 3) Set SW2 to the discharge position (Figure 1).
- 4) Wait at least 30s for the output capacitor to discharge.
- 5) Verify that the output voltage has dropped to near zero.
- 6) Disconnect the power supply and voltmeter from the EV kit.

<!-- image -->

Figure 1. Test Procedure Setup for MAX8685C EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

## Table 1. Jumper Settings

| JUMPER   | FUNCTION                                                                                                                                                                                                         |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Shorts V CC (IC supply for MAX8685C EV kit) to BATT (transformer primary supply). Short JU1 for single-supply 2.5V to 5.5V operation. Open JU1 for separate V CC (2.5V to 5.5V) and BATT (1.5V to 10V) supplies. |

## Detailed Description

## VCC and BATT Supplies

For single-supply operation, install a shunt for JU1 and connect the 2.5V to 5.5V supply to the pad on the EV kit labeled BATT. When using separate supplies to power the IC and the transformer primary, remove the shunt from JU1. Connect the 2.5V to 5.5V power supply to the EV kit pad labeled VCC and connect the 1.5V to 10V transformer power supply to the EV kit pad labeled BATT.

## Adjusting the Output Voltage

The output voltage is set by the ratio of a resistor voltagedivider. Choose R3 less than 2k Ω . The EV kit comes with a 1k Ω resistor installed. Larger resistor values, combined with parasitic capacitance at FB, can slow the rise time of the FB voltage during each cycle. This may prevent the MAX8685C from detecting when the output voltage has reached the desired level.

The value for upper resistors R1 and R2 (R1 = R2) is calculated by:

<!-- formula-not-decoded -->

where VFB is 1.25V.

Make sure the voltage rating of the resistors exceeds the desired output voltage. Two resistors in series are used for the upper resistor to meet the resistor voltage rating. Verify that the voltage rating of the output capacitor  and diode(s) exceed the desired output voltage. Also, make sure the transformer turns ratio is acceptable for  the  output  voltage  selected.  Refer  to  the MAX8685A-MAX8685F IC data sheet for more information  on  selecting the transformer turns ratio. The EV kit comes with the TDK LDT565630T-011 transformer installed, but the footprint also accommodates the Tokyo Coil TTRN-SU20S-00 1T.

## Flashing the Xenon Tube

The MAX8685C provides an integrated insulated gate bipolar transistor (IGBT) driver for discharging the photoflash capacitor through a xenon flash tube.

To turn on the IGBT gate, push down on SW3. Releasing SW3 drives TRIG low and turns off the IGBT gate. The IGBT driver circuitry remains active when EN is pulled low and VCC is valid. This allows a reduction in battery-power consumption while the photoflash capacitor is being discharged through the xenon flash tube. However, EN may be left high so that multiple flashes at maximum intensity can occur in rapid succession if needed.

If  the  MAX8685C EV kit is to be used with another xenon flash tube, ensure proper polarities are observed upon installation (Figure 2).

## DONE Output

An LED and resistor are connected between VCC and DONE to  indicate when the charge cycle is complete. To use DONE as a logic-level output instead of driving an LED, remove resistor R5 and D1 from the EV kit and install a pullup resistor in R5 and a 0 Ω resistor for D1. If the flash tube has been fired, or after 16s of automatic refresh mode, DONE does not assert a second time. DONE remains asserted until SW1 is toggled. DONE is not a safety indicator.

## Discharge Circuit

Resistors R8-R13 and switch SW2 are used to discharge the output capacitor. After power is shut down, set SW2 to the discharge position to discharge the output capacitor.

## Evaluating the MAX8685D

To evaluate the MAX8685D on the MAX8685C EV kit, replace the installed IC with a MAX8685D. Note that the default current limit increases to 1.6A when the MAX8685D is installed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

Figure 2. MAX8685C EV Kit Schematic for Single-Supply Operation

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

Figure 3. MAX8685C EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

Figure 4. MAX8685C EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8685C Evaluation Kit

Figure 5. MAX8685C EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8