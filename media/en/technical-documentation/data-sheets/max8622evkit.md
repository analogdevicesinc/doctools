<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8622 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8622 Xenon flash  charger. The MAX8622 EV kit operates from a 2.5V to 5.5V supply, and charges a 150µF capacitor to 300V. Battery voltages as low as 1.5V can be used to supply the inductor primary current. The current limit on the EV kit is set to the default of 1.6A, but is easily adjusted by adding a resistor. An LED indicator on the EV kit lights up when the charging cycle is complete.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ± 20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105M Taiyo Yuden JMK105 BJ105MV  |
| C2            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212 BJ106MG |
| C3            |     1 | 150µF ± 20%, 330V electrolytic capacitor Rubycon 330 FW 150V 13.2mm x 36mm                  |
| D1            |     1 | Dual series diode (SOT23) Philips BAV23S Central CMPD2004S                                  |
| D2            |     1 | LED, amber (0603) Panasonic LNJ412K84RA                                                     |

## MAX8622 Evaluation Kit Evaluates:  MAX8622

Features

- ♦ Charges 150µF to 300V in 4.4s at VIN = 3.5V
- ♦ No Inrush Current
- ♦ Programmable Input Current Limit Up to 1.6A
- ♦ Charge Done Indicator
- ♦ Small, 3mm x 3mm, 10-pin TDFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE        |
|--------------|------------------|-------------------|
| MAX8622EVKIT | 0 ° C to +70 ° C | 10 TDFN 3mm x 3mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                    |
|---------------|-------|--------------------------------|
| JU1           |     1 | 2-pin header                   |
| JU2           |     1 | 3-pin header                   |
| JU3, JU4      |     2 | PC board shorts                |
| R1, R2        |     2 | 124k Ω ± 1% resistors (1206)   |
| R3            |     1 | 1k Ω ± 1% resistor (0402)      |
| R4, R5, R7    |     0 | Not installed (0402)           |
| R6            |     1 | 200 Ω ± 5% resistor (0805)     |
| R8-R13        |     6 | 91k Ω ± 5% resistors (1206)    |
| SW1           |     1 | SPDT toggle switch             |
| T1            |     1 | Transformer TDK LDT565630T-011 |
| U1            |     1 | MAX8622ETB+                    |
| -             |     2 | Shunts, 2 position             |
| -             |     1 | MAX8622EVKIT PC board          |

## MAX8622 Evaluation Kit Evaluates:  MAX8622

## Quick Start

## Recommended Equipment

- 2.5V to 5.5V power supply capable of delivering 2A
- Voltmeter

## Procedure

Follow the steps below to verify board operation. LETHAL VOLTAGES ARE PRESENT in this circuit. Use caution when working with this evaluation kit.

- 1) Before connecting the EV kit, make sure the output capacitor is discharged. To do this, set SW1 to the discharge position. Wait at least 30 seconds before proceeding to make sure the capacitor has time to discharge.
- 2) Verify that the shunts are shorting JU1, and pins 2-3 of JU2.
- 3) Turn on the power supply and preset to the desired voltage between 2.5V and 5.5V.
- 4) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 5) Connect the positive power-supply terminal to the EV kit pad labeled BATT.
- 6) Connect the power-supply ground terminal to the EV kit pad labeled GND (on the left side of the board).
- 7) Connect the positive lead of the voltmeter to the EV kit pad labeled OUT and connect the negative lead of  the  voltmeter  to  the  EV  kit  pad  labeled  GND  at the bottom of the board.

## Table 1.  Jumper Settings

| JUMPER   | FUNCTION                                                                                                                                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Shorts V CC (IC supply) to BATT (transformer primary supply). Short JU1 for single-supply 2.5V to 5.5V operation. Open JU1 for separate V CC (2.5V to 5.5V) and BATT (1.5V to 5.5V) supplies.                                                  |
| JU2      | Enable. Short pins 1-2 for low-power shutdown mode, or short pins 2-3 to enable the circuit. To use an externally supplied enable signal, remove the shunt and connect the enable signal to the pad labeled EN.                                |
| JU3      | Connects UVI to VCC. Leave JU3 shorted to disable the UVI feature. Cut JU3 and install resistor R5 to set the UVI threshold. Refer to the MAX8622 data sheet for information on selecting the value for R5.                                    |
| JU4      | Connects ISET to VCC. Leave JU4 shorted for the default 1.6A current limit. To set the current limit lower, cut the trace shorting JU4 and install resistor R4. Refer to the MAX8622 data sheet for information on selecting the value for R4. |

- 8) Set SW1 to the left position to disconnect the discharge resistors.
- 9) Turn on the power supply.
- 10) After a few seconds (depending on the supply voltage), the LED will light up, indicating the charge is complete.
- 11) Verify that the voltmeter reads about 300V.

When done evaluating the MAX8622 EV kit, use the following steps to power down the EV kit:

- 1) Turn off the power supply.
- 2) Set SW1 to the discharge (right) position.
- 3) Wait at least 30 seconds for the output capacitor to discharge.
- 4) Verify that the voltmeter reads less than 20V.
- 5) Disconnect power-supply and test leads from the EV kit.

## Detailed Description

## VCC and BATT Supplies

For single-supply operation, short the pins of JU1, and connect the 2.5V to 5.5V supply to the pad on the EV kit labeled BATT.

To use separate supplies to power the IC and the transformer primary, remove the shunt from JU1. Connect the IC power supply (2.5V to 5.5V) to the EV kit pad labeled VCC, and connect the transformer power supply (1.5V to 5.5V) to BATT.

## Adjusting the Output Voltage

The output voltage is set by the ratio of a resistor voltage-divider. Choose R3 less than 2k Ω .  The  EV  kit comes with a 1k Ω resistor installed in R3. Larger resistor  values combined with parasitic capacitance at FB can slow the rise time of the FB voltage during each cycle. This could prevent the MAX8622 from detecting when the output has reached the desired level.

The value for the upper resistor (R1 and R2 in series) is found from:

<!-- formula-not-decoded -->

where, VFB is 1.25V. Make sure the voltage rating of the resistors  is  sufficient.  Two  resistors  in  series  are  used for the upper resistor to meet the resistor voltage rating. Verify that the voltage rating of the output capacitor and diode are sufficient. Also, make sure the transformer turns ratio is acceptable for the output voltage selected. Refer to the MAX8622 data sheet for more information on selecting the transformer turns ratio. The EV kit comes with the TDK LDT565630T-011 transformer installed,  but  the  footprint  will  also  accommodate  the Tokyo Coil TTRN-SU20S-001T.

## Setting the UVI Threshold

Table 2.  Component Suppliers

| SUPPLIER               | PHONE          | WEB                            | COMPONENTS                  |
|------------------------|----------------|--------------------------------|-----------------------------|
| Central Semiconductor  | 631-435-1110   | www.centralsemi.com            | Diodes                      |
| Kamaya                 | 260-489-1533   | www.kamaya.com                 | Resistors                   |
| Panasonic              | 714-373-7939   | www.panasonic.com              | Capacitors, LEDs, Resistors |
| Philips Semiconductor  | 408-474-8142   | www.semiconductors.philips.com | Diodes                      |
| Rubycon                | 408-467-3864   | www.rubycon.com                | Capacitors                  |
| Taiyo Yuden            | 408-573-4150   | www.t-yuden.com                | Capacitors                  |
| TDK                    | 847-803-6100   | www.component.tdk.com          | Capacitors, Transformers    |
| Tokyo Coil Engineering | 81-426-56-6262 | www.tokyo-coil.co.jp           | Transformers                |
| Vishay                 | 402-563-6866   | www.vishay.com                 | Resistors                   |

Note: Indicate you are using the MAX8622 when contacting these manufacturers.

## MAX8622 Evaluation Kit

## Evaluates:  MAX8622

The MAX8622 EV kit comes with the UVI feature disabled. To enable UVI and set the threshold, cut the trace shorting JU3 and install resistor R5. Refer to the MAX8622 data sheet for information on UVI and selecting the value for R5.

## Setting the Current Limit

The MAX8622 EV kit comes with the primary current limit set to the default value of 1.6A. To set the current limit to a lower value, cut the trace shorting JU4 and install resistor R4. Refer to the MAX8622 data sheet for information on current limit and selecting the value for R4.

## DONE Output

An LED is provided on the EV kit to indicate when the charge cycle is complete. To use DONE as a logic-level output instead of driving an LED, remove resistor R6 from the EV kit, and install a pullup resistor in R7.

## Discharge Circuit

Resistors R8-R13, and switch SW1 are used to discharge the output capacitor. After power is shutdown, set SW1 to the discharge (right) position to start discharging the output capacitor. The capacitor is discharged to a safe level after 30 seconds.

## DONE is not a safety indicator .

## MAX8622 Evaluation Kit Evaluates:  MAX8622

Figure 1.  MAX8622 EV Kit Schematic

<!-- image -->

Figure 2.  MAX8622 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8622 Evaluation Kit

## Evaluates:  MAX8622

Figure 3.  MAX8622 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX8622 Evaluation Kit Evaluates:  MAX8622

<!-- image -->

Figure 4.  MAX8622 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.