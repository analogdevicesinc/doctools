<!-- lastmod 2022-08-04 -->
## General Description

The MAX8753 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that generates the voltages required for active-matrix, thin-film transistor (TFT) liquid-crystal displays (LCDs). The EV kit contains  a  pulse-width-modulated (PWM) step-up switching regulator (VMAIN), positive and negative chargepump regulators (OUTP and OUTN) for the TFT gate drive, and a low-voltage linear regulator (OUTL).

The EV kit operates from a +2.6V to +5.5V (VIN) DC supply voltage. The step-up regulator switches at 1MHz and is  configured for a +9V output capable of providing 160mA with a +3V input. The positive and negative charge pumps are configured for +24V and -11V, respectively, and are both capable of providing 20mA. The linear voltage regulator (LDO) is configured to provide a regulated +2.5V output with a maximum 300mA load.

The MAX8753 EV kit features low quiescent current and high conversion efficiency (90%). Operation at 1MHz allows the use of small surface-mount components. The MAX8753 TQFN package (0.8mm max) with low-profile external components allows the circuit to be less than 1.2mm high.

| DESIGNATION        |   QTY | DESCRIPTION                                                                                |
|--------------------|-------|--------------------------------------------------------------------------------------------|
| C1, C3             |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J106M                           |
| C2, C4-C7, C15-C18 |     9 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K Taiyo Yuden UMK107BJ104KA |
| C8, C9             |     2 | 1µF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31MR71H105KA                         |
| C10                |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C224K                           |
| C11                |     1 | 1000pF ±10%, 100V X7R ceramic capacitor (0603) TDK C1608X7R2A102K                          |
| C12                |     1 | 10µF ±20%, 16V X5R ceramic capacitor (1210) Taiyo Yuden EMK325BJ106KD                      |
| C13                |     0 | Not installed, ceramic capacitor (1210)                                                    |
| C14                |     1 | 470pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H471K                            |
| D1                 |     1 | 1A, 30V Schottky diode (S-flat) Toshiba CRS02                                              |

- ♦ 90% Efficiency
- ♦ +2.6V to +5.5V Input Range
- ♦ Output Voltages (+3V Input)
- +9V Output at 160mA (Step-Up Regulator)
- +24V Output at 20mA (Positive Charge Pump)
- -11V Output at 20mA (Negative Charge Pump)
- +2.5V Output at 300mA (Linear Regulator)
- ♦ 1MHz Switching Frequency
- ♦ Low-Profile Design (1.2mm max)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8753EVKIT | 0°C to +70°C | 28 TQFN (5mm x 5mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| D2, D3        |     2 | 250mA, 90V, dual switching diodes (SOT23) Central Semiconductor CMPD1001S (Top mark: L21) |
| JU1, JU2      |     2 | 2-pin headers                                                                             |
| L1            |     1 | 6.8µH ±30%, 1.0A power inductor Sumida CMD6D11B-6R8                                       |
| R1, R2        |     2 | 100k Ω ±5% resistors (0603)                                                               |
| R3            |     1 | 20k Ω ±1% resistor (0603)                                                                 |
| R4            |     0 | Not installed, resistor (0603)                                                            |
| R5            |     1 | 25.5k Ω ±1% resistor (0603)                                                               |
| R6            |     1 | 464k Ω ±1% resistor (0603)                                                                |
| R7            |     1 | 19.1k Ω ±1% resistor (0603)                                                               |
| R8            |     1 | 215k Ω ±1% resistor (0603)                                                                |
| R9            |     1 | 28k Ω ±1% resistor (0603)                                                                 |
| R10           |     1 | 174k Ω ±1% resistor (0603)                                                                |
| R11           |     1 | 20k Ω ±5% resistor (0603)                                                                 |
| R12           |     0 | Not installed, short by PC trace (0603)                                                   |
| U1            |     1 | MAX8753ETI+ (28-pin TQFN 5mm x 5mm)                                                       |
| -             |     2 | Shunts                                                                                    |
| -             |     1 | MAX8753 EV kit PC board                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX8753 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Murata                | 770-436-1300 | www.murata.com        |
| Sumida                | 847-545-6700 | www.sumida.com        |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| Toshiba               | 949-455-2000 | www.toshiba.com/taec  |

Note: Indicate that you are using the MAX8753 when contacting these component suppliers.

## Recommended Equipment

- +2.6V to +5.5V, 2A DC power supply
- Voltmeter

## Quick Start

The MAX8753 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the PGND pad.
- 2) Verify that there are no shunts placed across jumpers JU1 and JU2 to enable the MAX8753 and all of the outputs.
- 3) Turn on the +2.6V to +5.5V DC power supply and verify that VMAIN is +9V.
- 4) Verify that OUTN is -11V.
- 5) Verify that OUTP is +24V.
- 6) Verify that OUTL is +2.5V.

## Detailed Description

The MAX8753 EV kit operates from a +2.6V to +5.5V input power supply. The EV kit contains a high-efficiency, pulse-width-modulated (PWM) step-up switching regulator, positive and negative charge-pump regulators, and a low-voltage LDO. The MAX8753 provides output control through the SHDN and LCDON configuration jumpers,

Table 1. Jumper JU1 and JU2 Functions

| SHUNT LOCATION   | SHUNT LOCATION   | SHUNT LOCATION   | SHUNT LOCATION   | INTERNAL REFERENCE   | LINEAR REGULATOR   | LCD SUPPLIES      |
|------------------|------------------|------------------|------------------|----------------------|--------------------|-------------------|
| JU1              | SHDN PIN         | JU2              | LCDON PIN        | REF                  | OUTL               | VMAIN, OUTN, OUTP |
| Installed        | GND              | Installed        | GND              | Disabled             | Disabled           | Disabled          |
| Installed        | GND              | Not installed    | VIN              | Disabled             | Disabled           | Disabled          |
| Not installed    | VIN              | Installed        | GND              | Enabled              | Enabled            | Disabled          |
| Not installed    | VIN              | Not installed    | VIN              | Enabled              | Enabled            | Enabled           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

JU1 and JU2. See the Output Control ( SHDN and LCDON) section.

As configured, the step-up switching regulator generates a +9V output (VMAIN) and provides 160mA from a +3V input when the regulated charge pumps are providing 20mA each. In the event that the charge pumps are unloaded, the VMAIN output is capable of providing 240mA from a +3V input. The step-up switching regulator output voltage can be adjusted from VIN to +13V by changing the values of feedback resistors R9 and R10.

The positive charge pump provides a regulated +24V output at load currents up to 20mA. The positive charge pump can be configured for output voltages up to three times VMAIN (minus dropout) by changing the values of feedback resistors R5 and R6. The negative charge pump provides a regulated -11V output at up to 20mA. The negative charge pump can be configured for output voltages from 0 to -12V by changing the values of feedback resistors R7 and R8.

The linear regulator supplies a regulated +2.5V output at load currents up to 300mA. The LDO output can be configured for voltages up to VIN (minus dropout) by changing the values of feedback resistors R3 and R4.

For details on changing the feedback resistors associated with each of the MAX8753 EV kit outputs, see the Evaluating Other Output Voltages section. Operation at a different input voltage, output voltages, or load currents may require a different inductor, output capacitors, and feedback components. Refer to the MAX8753 data sheet for detailed information on component selection.

## Jumper Selection

## Output Control ( SHDN and LCDON)

The MAX8753 IC provides two enable inputs, LCDON and SHDN ,  to  enable/disable the LCD supply outputs (VMAIN, OUTN, and OUTP), linear regulator (OUTL), and internal reference supply (REF). The SHDN input has precedence over the LCDON input. When SHDN is pulled low, all outputs are disabled, reducing the IC quiescent current to less than 1µA (typ). The SHDN input is set through jumper JU1 and the LCDON input is set through jumper JU2. See Table 1 for output configuration.

## Evaluating Other Output Voltages

The MAX8753 EV kit outputs (VMAIN, OUTP, OUTN, and OUTL) can be configured for different voltage levels  by  adjusting  their  respective  feedback resistors. Table 2 lists each of the MAX8753 outputs and their associated feedback resistors. To configure the feedback network, plug the desired output voltage and appropriate constants into the listed equation.

Table 2. Output Voltage Configuration

| OUTPUT   | AS CONFIGURED   | MAX VOLTAGE   | FEEDBACK RESISTORS                                                  | CONSTANTS           |
|----------|-----------------|---------------|---------------------------------------------------------------------|---------------------|
| VMAIN    | +9V             | +13V          | R 0 R MAIN V - FB 1 9 1 = ×             V               | V FB = 1.245V       |
| VMAIN    | +9V             | +13V          | R 0 R MAIN V - FB 1 9 1 = ×             V               | R9 = 10k Ω to 50k Ω |
| OUTP     | +24V            | +28V          | R R V - FBP 6 5 1 = ×             OUTP                  | V FBP = 1.25V       |
| OUTP     | +24V            | +28V          | R R V - FBP 6 5 1 = ×             OUTP                  | R5 = 10k Ω to 50k Ω |
| OUTN     | -11V            | -12V          | R R O - V V - V FBN FBN REF 8 7 = ×               UTN | V FBN = 250mV       |
| OUTN     | -11V            | -12V          | R R O - V V - V FBN FBN REF 8 7 = ×               UTN | V REF = 1.25V       |
| OUTN     | -11V            | -12V          | R R O - V V - V FBN FBN REF 8 7 = ×               UTN | R7 = 10k Ω to 50k Ω |
| OUTL     | +2.5V           | +V IN         | R R O V - FBL 4 3 1 = ×             UTL                 | V FBL = 1.25V       |
| OUTL     | +2.5V           | +V IN         | R R O V - FBL 4 3 1 = ×             UTL                 | R3 = 10k Ω to 50k Ω |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8753 Evaluation Kit

Operation at a different input voltage, output voltages, or load currents may require a different inductor,  output capacitors, and feedback components. Refer to the MAX8753 data sheet for detailed information on component selection.

## MAX8753 Evaluation Kit

Figure 1. MAX8753 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX8753 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8753 Evaluation Kit

Figure 3. MAX8753 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8753 EV Kit PC Board Layout-Internal Layer 2GND Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8753 Evaluation Kit

Figure 5. MAX8753 EV Kit PC Board Layout-Internal Layer 3-Power Plane

<!-- image -->

Figure 6. MAX8753 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Springer