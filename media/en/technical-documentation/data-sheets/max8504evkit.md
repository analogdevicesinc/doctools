<!-- lastmod 2022-08-02 -->
## General Description

The MAX8504 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX8504 1MHz pulse-width modulated (PWM) step-down DC-to-DC converter optimized for powering the power amplifier (PA) in wireless applications. The EV kit provides a 1.25V output from a 2.6V to 5.5V input range and can deliver 600mA of load current.  The  output  voltage  can  be  reconfigured to voltages in the range of 1.25V to 2.5V by adding two resistors. The MAX8504 EV kit can also be used to evaluate the MAX8500 and the MAX8503 converters that can dynamically control the output voltage from 0.4V to VIN.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106MT                               |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104KT                               |
| C3            |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224KA                        |
| C4            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475MT or Taiyo Yuden JMK212BJ475MG |
| C5            |     1 | 560pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608COG1H561JT or Taiyo Yuden UMK107CG561JZ   |
| C6            |     0 | Not installed, capacitor (0603)                                                                |
| J1            |     0 | Not installed, scope-probe connector                                                           |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                                  |
| L1            |     1 | 4.7µH, 900mA inductor Sumida CDRH3D16-4R7NC                                                    |
| R1, R2        |     0 | Not installed, resistors (0603)                                                                |
| R3            |     1 | 9.1k Ω ±5% resistor (0603)                                                                     |
| U1            |     1 | MAX8504ETC 12-pin thin QFN 4mm x 4mm, topmark: AABS                                            |
| None          |     3 | Shunts (JU1, JU2, JU3)                                                                         |
| None          |     1 | MAX8504 PC board                                                                               |

<!-- image -->

Features

- ♦ Integrated 0.25 Ω Bypass PFET
- ♦ Externally Fixed 1.25V Output Voltage
- ♦ 600mA Output Current
- ♦ Adjustable Output Voltages (1.25V to 2.5V)
- ♦ 2.6V to 5.5V Input Voltage Range
- ♦ Low 0.1µA (typ) Quiescent Current in Shutdown Mode
- ♦ Evaluates MAX8500/MAX8503 Converters (Adjustable Output 0.4V to VIN)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE      | IC PACKAGE   |
|--------------|-----------------|--------------|
| MAX8504EVKIT | 0 ° C to 70 ° C | 12 Thin QFN  |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE                |
|-------------|--------------|--------------|------------------------|
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com         |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com        |
| TDK         | 847-803-6100 | 847-390-4405 | www.component. tdk.com |

Note: Please indicate that you are using the MAX8504 when contacting these component suppliers.

## Quick Start

The MAX8504 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is connected across pins 1 and 2 of jumper JU1 (output enabled).
- 2) Verify that a shunt is connected across pins 1 and 2 of jumper JU2 (PWM mode enabled).
- 3) Verify that a shunt is connected across pins 2 and 3 of jumper JU3 (high-power bypass mode disabled).
- 4) Connect a voltmeter across the VOUT and the GND pads to monitor the output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8504 Evaluation Kit

- 5) Connect a 2.6V to 5.5V power supply to the VIN pad. Connect the power-supply ground terminal to the GND pad.
- 6) Turn on the power supply and verify that the output voltage is 1.25V.

## Detailed Description

The MAX8504 EV kit circuit board demonstrates the MAX8504 1MHz PWM step-down DC-to-DC converter circuit that is optimized to power a PA in wireless applications. The EV kit requires a power supply with a 2.6V to  5.5V  output  range.  The  EV  kit  is  configured  for  an output voltage of 1.25V and can provide 600mA of load current. The output voltage can be reconfigured by installing  feedback resistors R1 and R2 on the board. The EV kit board features jumpers that enable the user to configure the shutdown, SKIP/PWM, and high-power (HP) bypass modes.

The MAX8504 EV kit board can also be used to evaluate the MAX8500/MAX8503 converters that can dynamically control the output voltage in the range of 0.4V to VIN from an analog control signal supplied by the user.

## Output Voltage

The MAX8504 EV kit circuit is configured to regulate the output voltage to 1.25V. The output voltage (VOUT) can be adjusted in the range of 1.25V to 2.5V by cutting open the short across R1 and installing feedback resistors,  R1 and R2. Select feedback resistor R2 between 5k Ω and 50k Ω ,  and R1 is determined by the following equation:

<!-- formula-not-decoded -->

where VFB = 1.25V and VOUT is the desired output voltage.

## Shutdown Mode

The EV kit contains jumper JU1 to allow the user to switch the MAX8504 converter from enable to shutdown mode. Shutdown mode reduces the supply current  to  0.1µA  (typ)  and  sets  the  output  voltage  to  0V. See Table 1 for JU1 configurations.

## Table 1. Jumper JU1 (Shutdown)

| SHUNT LOCATION   | SHDN PIN         | EV KIT OPERATION             |
|------------------|------------------|------------------------------|
| 1 and 2          | Connected to VIN | Output enabled, VOUT = 1.25V |
| 2 and 3          | Connected to GND | Shutdown, VOUT = 0V          |

## SKIP/PWM Mode

Installing  a  shunt  across  pins  2  and  3  of  jumper  JU2 enables skip-mode operation. This allows automatic PWM control at medium and heavy current loads and skip mode at light current loads to improve efficiency and reduce quiescent current. Installing a shunt across pins 1 and 2 of JU2 enables forced-PWM operation. Forced-PWM operation is desirable in sensitive RF and data-acquisition applications to ensure that switching harmonics do not interfere with sensitive IF and data sampling frequencies. Forced-PWM operation uses higher supply current with no load compared to skip mode. See Table 2 for JU2 configuration.

## Table 2. Jumper JU2 (SKIP/PWM)

| SHUNT LOCATION   | SKIP PIN         | EV KIT OPERATION                                                |
|------------------|------------------|-----------------------------------------------------------------|
| 1 and 2          | Connected to VIN | PWM operation at all loads                                      |
| 2 and 3          | Connected to GND | SKIP mode at light loads and PWM mode at medium and heavy loads |

## High-Power Bypass Mode

Jumper JU3 allows the user to enable or disable the high-power bypass mode of the MAX8504 converter. When the high-power mode is enabled, the converter stops regulating the output voltage and the output voltage VOUT is equal to the input voltage VIN. When the high-power mode is disabled, the converter regulates the output voltage to the programmed voltage. See Table 3 for JU3 configuration. Removing the shunt on jumper JU3 and applying a CMOS logic-level signal to the HP pad on the EV kit board can also control the high-power bypass mode.

## Table 3. Jumper JU3 (High-Power Mode)

| SHUNT LOCATION   | HP PIN              | EV KIT OPERATION                                                                          |
|------------------|---------------------|-------------------------------------------------------------------------------------------|
| 1 and 2          | Connected to VIN    | High-power bypass mode enabled, VOUT = VIN                                                |
| 2 and 3          | Connected to GND    | High-power bypass mode disabled, VOUT = 1.25V                                             |
| None             | Connected to HP pad | Output controlled by the user (user-supplied control signal must be connected to HP pad). |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating MAX8500/MAX8503

The MAX8504 EV kit circuit board comes with the MAX8504 converter installed. The MAX8504 EV kit board can  also  be  used  to  evaluate  the  MAX8500/ MAX8503 converters, which do not require feedback resistors to set the output voltage. An analog control signal connected to the REFIN pad dynamically adjusts the output voltage from 0.4V to VIN. The gain from REFIN to VOUT is internally set to 1.76 (MAX8500) or 2 (MAX8503). See Table 4 for details on the various features of the MAX8500/MAX8503/MAX8504 converters.

Follow these steps to evaluate the MAX8500/MAX8503 converters on the MAX8504 EV kit board:

- 1) Replace the MAX8504 converter (U1) with the alternate converter (Table 4).
- 2) Cut open the short across R1.

## MAX8504 Evaluation Kit

- 3) Install a 0.01µF (0603 case) capacitor on R2.
- 4) Connect a DC voltage signal to the REFIN pad to set the output voltage VOUT (VOUT = gain x REFIN).
- 5) Install a shunt across pins 1 and 2 of JU3.
- 6) Refer to the Compensation, Stability, and Output Capacitor section of the MAX8500-MAX8504 data sheet to verify component values for the application.

## Table 4. Alternate Converters

| PART        | GAIN   | IC TOP MARK   |
|-------------|--------|---------------|
| MAX8500ETC  | 1.76x  | AABQ          |
| MAX8503ETC  | 2x     | AABU          |
| MAX8504ETC* | N/A    | AABS          |

<!-- image -->

Figure 1. MAX8504 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8504 Evaluation Kit

<!-- image -->

Figure 2. MAX8504 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8504 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8504 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4