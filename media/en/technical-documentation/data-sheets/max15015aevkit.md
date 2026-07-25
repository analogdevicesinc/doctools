<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX15015A evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX15015A PWM/PFM step-down converter, which integrates a high-side  switch  and  an  LDO  regulator.  The MAX15015A EV kit operates over a wide inputvoltage range of 4.5V to 40V and provides up to 1A at the 3.3V output. The LDO regulator provides up to 50mA at the preset 5V output. The MAX15015A features undervoltage lockout, overcurrent, and thermalshutdown protection.

The MAX15015A normally operates as a PWM converter and automatically switches to PFM mode at light loads to  improve efficiency. The MAX15015A switching frequency is preset to 500kHz and features a SYNC input to provide external frequency synchronization for sensitive applications. The EV kit provides PCB pads to evaluate  the  SYNC  and  ENABLE  features  of  the MAX15015A. The EV kit board can also be used to evaluate the MAX15015B. The MAX15015A can operate over the automotive temperature range of -40°C to +125°C.

| DESIGNATION         |   QTY | DESCRIPTION                                                           |
|---------------------|-------|-----------------------------------------------------------------------|
| C1                  |     1 | 10µF ±10%, 50V X5R ceramic capacitor (2220) Murata GRM55DR61H106K     |
| C2, C4, C5, C6, C15 |     5 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK CI608X7R1H104K      |
| C3                  |     1 | 0.22µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H224K   |
| C7                  |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5RUJ476M       |
| C8, C13             |     2 | 0.033µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H333K |
| C9                  |     1 | 0.47µF ±10%, 10V X7R ceramic capacitor (0603) TDK CI608X7R1A474K      |

Component List continued on next page.

## Features

- ♦ 3.3V, 1A, 500kHz Step-Down Converter
- ♦ 5V, 50mA LDO Regulator
- ♦ LDO Voltage Adjustable Up to 11V
- ♦ Independent Turn On/Off Control for Step-Down Converter (EN\_SW)
- ♦ Regulator Power-On Reset with Adjustable Timeout Period
- ♦ 84% High Efficiency at VIN = 12V and IOUT = 1A
- ♦ Automatic PWM/PFM Mode
- ♦ Overcurrent and Thermal-Shutdown Protection
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TEMP RANGE    | IC PACKAGE   |
|-----------------|---------------|--------------|
| MAX15015AEVKIT+ | 0°C to +70°C* | 36 TQFN-EP** |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C10           |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K       |
| C11           |     1 | 10µF ±10%, 16V X7R ceramic capacitor (1206) Murata GRM31CR61C106K   |
| C12           |     1 | 220pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221J      |
| C14           |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K |
| D1            |     1 | 150mA, 100V Schotky diode (SOD-123) Vishay BAT46W                   |
| D2            |     1 | 2A, 60V Schotky diode (SMB) Diode Inc. B260                         |

## MAX15015A Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| JU1, JU2, JU3 |     3 | 2-pin headers                                   |
| L1            |     1 | 27µH, 2.8A inductor Sumida CDRH124NP-270MC      |
| R1, R2        |     2 | 332k Ω ±1% resistors (0603)                     |
| R3            |     0 | Not installed, resistor (0603)                  |
| R4, R11       |     2 | 10k Ω ±5% resistors (0402)                      |
| R5            |     1 | 1 Ω ±5% resistor (0603)                         |
| R6            |     1 | 2.26k Ω ±1% resistor (0603)                     |
| R7            |     1 | 4.53k Ω ±1% resistor (0603)                     |
| R8            |     1 | 133 Ω ±1% resistor (0603)                       |
| R9            |     1 | 7.5k Ω ±1% resistor (0603)                      |
| R10           |     1 | 61.9k Ω ±1% resistor (0603)                     |
| R12           |     1 | 63.4k Ω ±1% resistor (0603)                     |
| TP1           |     1 | PC mini red test point                          |
| U1            |     1 | MAX15015AATX+ (36-pin, 6mm x 6mm x 0.8mm, TQFN) |
| -             |     3 | Shunts (JU1, JU2, JU3)                          |
| -             |     1 | MAX15015AEVKIT+ PCB                             |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Diodes Inc. | 805-446-4800 | www.diodes.com        |
| Murata      | 770-436-1300 | www.murata.com        |
| Sumida      | 847-545-6700 | www.sumida.com        |
| TDK         | 847-803-6100 | www.component.tdk.com |
| Vishay      | 203-268-6261 | www.vishay.com        |

Note: Indicate that you are using the MAX15015A when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 40V adjustable, 2A power supply
- Electronic load capable of sinking up to 1A
- Three digital voltmeters

## Procedure

The MAX15015A EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of the electronic load to the VOUT PCB pad on the EV kit board. Connect the ground terminal of the electronic load to the PGND PC pad.
- 2) Connect digital voltmeters across the VIN and PGND pads, VOUT and PGND PC pads, and the LDO\_OUT and GND pads.
- 3) Verify that shunts are installed on jumpers JU1 and JU2 (step-down converter and LDO outputs enabled).
- 4) Verify  that  a  shunt  is  not  installed  at  jumper  JU3 (LDO\_OUT set to 5V).
- 5) Connect the power supply's positive terminal to the VIN PCB pad on the EV kit. Connect the powersupply ground terminal to the PGND PC pad.
- 6) Turn on the power supply.
- 7) Set the power-supply voltage to 12V.
- 8) Enable the 1A electronic load.
- 9) Verify  that  the  voltmeters  at  VOUT  and  LDO\_OUT measure 3.3V and 5V, respectively.

## Detailed Description

The MAX15015A EV kit evaluates the MAX15015A PWM/PFM step-down converter with an integrated high-side switch and LDO regulator. The MAX15015A EV kit operates over a wide input-voltage range of 4.5V to 40V and requires a 2A power supply.

The MAX15015A EV kit step-down converter is configured  to  3.3V  and  provides  up  to  1A  (typ).  The MAX15015A step-down converter switching frequency is set to 500kHz, and can be synchronized to a SYNC input signal operating below 600kHz. The MAX15015A normally operates as a PWM converter and automatically  switches  to  PFM  mode at light loads to improve efficiency. The EV kit features PCB pads to evaluate the SYNC, EN\_SW, and the EN\_SYS features of the MAX15015A.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15015A Evaluation Kit

The LDO regulator has a default 5V output and can be configured for a 2.5V output after installing the shunt on jumper JU3. An open-drain RESET output changes from low to high whenever the LDO voltage rises to 92.5% of its  regulated  output.  When  LDO\_OUT exceeds its rising threshold voltage, RESET remains low for the reset timeout period, and then goes high. The RESET signal can be monitored at test point TP1 on the EV kit and is pulled up to LDO\_OUT by resistor R11. The reset timeout period is set by capacitor C8.

The MAX15015A features configurable soft-start, independent undervoltage lockout (UVLO) for the stepdown converter and regulator, cycle-by-cycle current limit,  hiccup-mode-output short-circuit protection, and thermal shutdown. The step-down converter UVLO is configurable by choosing the appropriate R2 and R3 resistor values.

## Jumper Selection

## Enabling VOUT and LDO\_OUT

The MAX15015A features input pads EN\_SW and EN\_SYS that can be used to enable the VOUT and LDO\_OUT outputs. The EV kit also provides jumpers JU1 and JU2 to configure the EN\_SW and EN\_SYS, respectively. See Table 1 for jumpers JU1 and JU2 configurations.

## Table 1. EN\_SYS and EN\_SW Configuration

| JU1 SHUNT POSITION   | JU2 SHUNT POSITION   | EV KIT FUNCTION   | EV KIT FUNCTION   |
|----------------------|----------------------|-------------------|-------------------|
|                      |                      | VOUT              | LDO_OUT           |
| Not installed        | Not installed        | Off               | Off               |
| Not installed        | Installed            | Off               | Off               |
| Installed            | Not installed        | Off               | On                |
| Installed            | Installed            | On                | On                |

The MAX15015A EV kit shutdown current can be evaluated by removing jumper JU1.

## LDO\_OUT Selection

Jumper JU3 sets the linear regulator output voltage to 2.5V or 5V. See Table 2 for LDO jumper configuration. To configure LDO\_OUT to other output voltages, refer to the Setting the LDO Linear Regulator Output Voltage section in the MAX15015A data sheet.

<!-- image -->

## Table 2. LDO Configuration (JU3)

| JU3 SHUNT POSITION   | SET_LDO PIN CONNECTION                     | LDO_OUT OUTPUT VOLTAGE   |
|----------------------|--------------------------------------------|--------------------------|
| Not installed        | Connected to GND                           | 5V                       |
| Installed            | Connects to feedback resistors R10 and R12 | 2.5V                     |

## Configuring the Output Voltage (VOUT)

The MAX15015A EV kit step-down converter output voltage is configured to 3.3V by resistors R7 and R9. The EV kit's output voltage (VOUT) can be reconfigured in  the  range of 1.26V to 28V by replacing these resistors. To select a new value for resistor R7, refer to the Setting the Output Voltage section in the MAX15015A data sheet. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

where VOUT is the desired output voltage in volts.

Reconfiguring the MAX15015A EV kit for a new output voltage may require replacing inductor L1 and capacitors C1 and/or C7. To select a new value for inductor L1 and capacitors C1 and C7, refer to the Inductor Selection, Output Capacitor Selection,  and Input Capacitor Selection sections, respectively, in the MAX15015A data sheet.

## Configuring the Undervoltage Lockout (UVLO)

The MAX15015A step-down converter and LDO regulator  turns  on  when the input voltage (VIN) is above the MAX15015A minimum 4.1V threshold (shunts on JU1 and JU2 must be installed) .  The  converter turn-on threshold can be reconfigured to a desired value greater than 4.1V by selecting resistors R2 and R3. To reconfigure the converter's turn-on threshold, use the following equation:

<!-- formula-not-decoded -->

where VEN\_SW is the desired turn-on threshold in volts.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15015A Evaluation Kit

## Linear Regulator Operation

The MAX15015A linear regulator operates in either a preset voltage mode or an adjustable mode. In preset voltage mode, LDO\_OUT is 5V. Select the preset voltage mode by removing the shunt at JU3. In adjustable mode, LDO\_OUT is set to 2.5V by resistors R10 and R12 (shunt installed at JU3). To reconfigure LDO\_OUT voltage to a different voltage (1.5V to 11V ), replace resistors R10 and R12 with new values. Use the following equation to select a new resistor value:

<!-- formula-not-decoded -->

where VLDO\_OUT is the desired LDO\_OUT voltage.

## Synchronization Input (SYNC)

The EV kit's SYNC PCB pad can be used to synchronize the MAX15015A switching frequency with an external digital-clock signal in the range of 400kHz to 600kHz. When SYNC is driven with an external digital clock, the MAX15015A synchronizes to the rising edge of the external clock.

The square-wave clock source must provide the following signal qualities:

- Logic-low = 0 to 0.8V
- Logic-high = 2.2V to 5.5V

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Input frequency = 400kHz to 600kHz. Refer to the MAX15015A data sheet for more information on the SYNC pin.
- Duty cycle = 50%

To use external synchronization, connect the external square-wave clock to the SYNC and GND pads.

## Compensation Network

The MAX15015A IC provides the flexibility of externally compensating its internal error amplifier to achieve stability  for  various  applications.  The  MAX15015A is compensated by choosing values for resistors R6-R9, and capacitors C12, C13, and C14. To reconfigure the compensation network for specific requirements, refer to the Compensation Design section in the MAX15015A data sheet.

## Evaluating the MAX15015B

The MAX15015A EV kit board can also evaluate the MAX15015B step-down converter. The MAX15015A IC must be removed and replaced with the MAX15015B. When using the MAX15015B, LDO\_OUT has a 3.3V default output (JU3 not installed).

<!-- image -->

## MAX15015A Evaluation Kit

Figure 1. MAX15015A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15015A Evaluation Kit

<!-- image -->

Figure 2. MAX15015A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX15015A EV Kit PCB Layout-GND Layer 2

Figure 3. MAX15015A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX15015A EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15015A Evaluation Kit

Figure 6. MAX15015A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7