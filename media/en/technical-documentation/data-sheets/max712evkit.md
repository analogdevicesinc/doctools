<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX712 Linear-Mode Evaluation Kit

## General Description

The linear-mode evaluation kit (EV kit) is a complete battery charger for nickel metal hydride (NiMH) and 'fast-charge' nickel-cadmium (NiCd) cells. The number of cells, charging current, and maximum charging time are selected by setting DIP switches. The board is easily  tailored  for  the  optimum  charging  parameters of a variety of 'fast-charge' batteries, and can be used with either the MAX712 or MAX713.

The MAX712 EV kit automatically initiates the highcurrent, fast-charge cycle when batteries are installed into the holder. An LED indicates that the fast-charge sequence is in progress. Fast charge terminates when the maximum charging time has lapsed, or the circuit detects that full charge has been achieved, and/or if the temperature is beyond acceptable limits.

Thermistors are provided for optionally monitoring the battery temperature. The fast-charge cycle can be inhibited if the battery is too cold, or terminated if the battery temperature rises beyond limits. The temperature thresholds are adjustable using potentiometers on the board.

## Features

- ♦ Selectable Number of Cells (1 to 16)
- ♦ Selectable Maximum Fast-Charging Timeout
- ♦ Selectable Charging Current
- ♦ Battery Temperature Monitoring Capabilities
- ♦ Adjustable Temperature Limits
- ♦ LED Indication of Fast-Charge Cycle
- ♦ On-Board Battery Holder for 1 or 2 AA Cells
- ♦ Voltage-Slope Fast-Charge Termination

## Ordering Information

| PART            | TEMP RANGE   | BOARD TYPE   |
|-----------------|--------------|--------------|
| MAX712EVKIT-DIP | 0°C to +70°C | Through-Hole |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                       |
|---------------|-------|-----------------------------------|
| C1, C3        |     2 | 10µF, 35V electrolytic capacitors |
| C2, C7        |     2 | 1.0µF ceramic capacitors          |
| C4            |     1 | 0.01µF ceramic capacitor          |
| C5, C6        |     2 | 0.022µF ceramic capacitors        |
| C7            |     1 | 0.01µF ceramic capacitor          |
| D1            |     1 | 1N4001 diode                      |
| IC1           |     1 | MAX712CPE                         |
| J1            |     1 | 3-pin jumper header               |
| LED1, LED2    |     2 | Red LEDs                          |
| Q1            |     1 | 2N6109 PNP power transistor       |
| R1            |     1 | 200 Ω , ±5% resistor              |
| R3, R5        |     2 | 470 Ω , ±5% resistors             |
| R4            |     1 | 150 Ω , ±5% resistor              |
| R6, R7        |     2 | 10k Ω multiturn potentiometers    |
| R8            |     1 | 20k Ω multiturn potentiometer     |
| R9-R11        |     3 | 1k Ω , ±5% resistors              |
| R12-R15       |     4 | 1.0k Ω , ±5% 1/2W resistors       |
| R16           |     1 | 2.0 Ω , ±5% 1/2W resistor         |

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| R17           |     1 | 3.9 Ω , ±5% 1/2W resistor                                                    |
| R18           |     1 | 8.2 Ω, ±5% 1/2W resistor                                                     |
| R19           |     1 | 16 Ω, ±5% 1/2W resistor                                                      |
| R20           |     1 | 330 Ω, ± 5% 1/2W resistor                                                    |
| SWA           |     1 | 12-position DIP switch                                                       |
| SWB           |     1 | 8-position DIP switch                                                        |
| TR1-TR3       |     3 | 10k Ω at +25°C thermistors. Alpha Sensors 14A1002 NTC. Phone (858) 549-4660. |
| None          |     1 | 16-pin IC socket                                                             |
| None          |     2 | Battery holder for two AA cells                                              |
| None          |     1 | 2-pin power connector                                                        |
| None          |     1 | 3-pin power connector                                                        |
| None          |     1 | Shunt for J1                                                                 |
| None          |     1 | 4in x 4in" PC board                                                          |
| None          |     4 | Rubber feet                                                                  |
| None          |     1 | MAX712/MAX713 data sheet                                                     |
| None          |     1 | MAX712/MAX713 EV kit manual                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX712 Linear-Mode Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Reference

The MAX712 evaluation kit (EV kit) is ready to charge two fast-charging AA NimH cells. The switches and voltages are set at the factory per Tables 5, 6, and 7.  Simply connect a 7V, 1A supply to the VIN power connector and insert two discharged AA NimH cells.

The power-indicating LED will light as soon as power is applied. The voltage across the battery terminals, BATT+ and BATT-, will be two times the voltage on the VLIMIT pin. When batteries are inserted into the holder, the MAX712/MAX713 start a fast-charge cycle and light the charge-indicator LED. The default battery current is set to 250mA during the fast-charge cycle. Battery voltage can be monitored by connecting a voltmeter across the BATT+ and BATT- terminals.

The MAX712 EV kit can be used to evaluate the MAX713 for charging NiCd batteries by replacing the MAX712CPE (included in this kit) with a MAX713CPE.

Note: The EV kit is intended for use with cells capable of the high currents needed for fast-charging cycles. The proper charging current and period will depend on the exact type of battery being charged. Be sure  the kit is configured properly. Check the default values and switch settings before applying power to the board. Refer to Tables 6 and 7 for the default settings. To ensure the board is operating, verify Table 8's voltages after power is applied and without a battery inserted.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX712 EV kit provides the regulated high currents used for recharging the increasingly popular 'fast-charge' batteries. The kit is shipped ready to charge two AA NimH cells. Be sure the programmed current does not exceed the maximum charging current of the batteries to be charged. Tables 1-5 list the different user options available on the EV kit. Tables 6, 7, and 8 list the levels preset at the factory for the various charging parameters.

## Choosing Between the MAX712 and the MAX713

The MAX712 is intended to charge only NiMH batteries because it uses a zero delta voltage full-charge detection scheme. The MAX713 can be used to charge either NiCd or NiMH batteries because its 2.5mV-per-cell resolution allows it to detect the very slight peak in the NiMH charge characteristic. Some NiMH batteries require three different current levels when charging: an initial high current, an intermediate topping-off current, and a low trickle current.  Neither the MAX712 nor the MAX713 is intended to charge this type of NiMH battery.

## Input Source

The MAX712/MAX713 require an input 1.5V greater than the maximum charging voltage, with a 6V minimum. Because of Q1's power-dissipation limits, the EV kit operates ideally with the input voltage set to 7V. This allows charging currents up to 1A while dissipating less than 5W from Q1. Higher input voltages and charging currents can be used if Q1's power dissipation is reduced or a sufficient heat sink is attached to Q1.

For input voltages greater than 11V, it may be necessary to change R1's value, which must allow greater than 5mA for  the  MAX712/MAX713 plus approximately 16mA for drive current to the LED indicators. See the Powering the MAX712/MAX713 section of the data sheet for more information about R1 selection. For the EV kit, the input source must be capable of handling the charging current plus 25mA. Connect the source to a 2-terminal connector on the board marked +VIN and GND.

When choosing an adapter for use with the MAX712/ MAX713, make sure that the lowest wall-cube voltage level during fast charge and full load is at least 1.5V higher than the maximum battery voltage while being fast charged. Typically, the voltage on the battery pack is higher during a fast-charge cycle than while in trickle charge or while supplying a load. The voltage across some battery packs may approach 1.9V/cell.

The 1.5V of overhead is needed to allow for worst-case voltage drops across the pass transistor (Q1), the diode (D1), and the sense resistor (RSENSE). This minimum input voltage requirement is critical, because its violation may inhibit proper termination of the fast-charge cycle. A safe rule of thumb is to choose a source that has a minimum input voltage = 1.5V + (1.9V x the maximum number of cells to be charged).  When the input voltage at DC IN drops below the 1.5V + (1.9V x number of cells), the part will oscillate between fast charge and trickle charge and may never completely terminate fast charge.

## Battery Connection

The battery connects across the battery high (BATT+) and battery low (BATT-) pins of the MAX712/MAX713. The pins connect to the battery holder and the 3-pin terminal block on the board. The battery holder charges one or two AA cells, depending on J1's position. Jumper J1 should be placed across pins 2 and 3 for a single cell and across 1 and 2 for two cells.

External batteries can be connected across the BATT+ and BATT- pins of the 3-pin output connector. The third terminal is  connected to the input ground (GND). The GND pin is used when driving external loads while charging.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX712 Linear-Mode Evaluation Kit

When using external batteries, jumper J1 has no effect.  Remove all batteries from holder before installing external batteries.

## Sense-Resistor Selection

The charging rate is determined by the value of the sense resistor connected between BATT- and GND. The 8-position DIP switch (SWB) can select several different values. For fast charge, the sense voltage is fixed at 250mV and the resistor value is selected for the desired current. The sense resistor also sets the trickle current.  Choose RSENSE using the following formula:

RSENSE = 0.25V/IFAST

See the MAX712/MAX713 data sheet for complete information on setting the currents for fast (IFAST) and trickle charging.

Table 1. Switch-Selected Sense-Resistor Values

|   SWITCH |   RESISTOR ( Ω ) |
|----------|------------------|
|        1 |              1.0 |
|        2 |              1.0 |
|        3 |              1.0 |
|        4 |              1.0 |
|        5 |              2.0 |
|        6 |              3.9 |
|        7 |              8.2 |
|        8 |             16.0 |

Note: A 330 Ω resistor  (R20)  is  paralleled  across  the sense resistor to prevent the open-sense line condition.

An unused resistor position (R21) is also provided so the user can mount a selected value.

## Mode Selection

Four pins on the MAX712/MAX713 are used to select the number of cells, maximum charging time, and interval between battery voltage measurements. PGM0 and PGM1 are used in combination to indicate the number of cells in the battery.

Whenever changing the number of cells to be charged, PGM0 and PGM1 need to be adjusted accordingly. Attempting to charge more or fewer cells than the number programmed may disable the voltage-slope fastcharge termination circuitry. The internal ADC's input volt-

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

age range is limited to between 1.4V and 1.9V and is equal to the voltage across the battery divided by the number of cells programmed. When the ADC's input voltage falls out of its specified range, the voltage-slope termination circuitry is disabled.

The MAX712/MAX713 multiply the input voltage on the VLIMIT pin by the programmed number of cells to be charged. This becomes the maximum output voltage of the MAX712/MAX713. VLIMIT should be set between 1.9V and 2.5V. If VLIMIT is set below the maximum cell voltage, proper termination of fast-charge cycle may not occur. Cell voltage can approach 1.9V/cell, under fast charge, in some battery packs. Tie VLIMIT to VREF for normal operation.

PGM2 and PGM3 are used in combination to select the maximum charging time (timeout) and the time interval between samples taken by the internal ADC. The fastcharge cycle terminates regardless of the battery level when the timeout period expires. Timeout intervals between 22 and 264 minutes can be selected.

The interval between the ADC samples varies with the timeout selection. If the voltage-slope fast-charge termination circuitry is enabled, the readings are also compared to the previous reading. Fast charge ceases if the delta is not more positive than zero for the MAX712 or -2.5mV for the MAX713.

PGM3 also sets the sense voltage for the trickle-charge phase.

The inputs to the programming pins (PGM0-PGM3) are set with the 12-position DIP switch (SWA). For example, to connect PGM2 to BATT-, first open (OFF) S7, S8, and S9, then close (ON) S8.

Table 2. Programming Pin Input Selection

| INPUT   | PGM0   | PGM1   | PGM2   | PGM3   |
|---------|--------|--------|--------|--------|
| Open    | -      | -      | -      | -      |
| REF     | S1     | S4     | S7     | S10    |
| BATT-   | S2     | S5     | S8     | S11    |
| V+      | S3     | S6     | S9     | S12    |

## MAX712 Linear-Mode Evaluation Kit

## Using the Thermistors

Thermistors TR1 and TR2 detect when the battery temperature exceeds the ambient temperature. With two of the same type of thermistors, as long as the battery temperature is the same as the ambient temperature, the voltage at TEMP will be 1.0V. At +25°C ambient temperature and +35°C battery temperature, TR2 has 10k Ω resistance and TR1 has 5.2k Ω resistance (refer to the graph labeled 'Alpha Sensors Part No. 14A1002' in the Typical Operating Characteristics of the MAX712/MAX713 data sheet); thus TEMP equals 1.3V. Fast charge terminates once TEMP exceeds THI. Adjust the voltage on THI to set the over-temperature trip point.

Table 3. Programming the Timing Functions

|   TIMEOUT (min) |   Sample Interval (s) | SLOPE LIMIT   | PGM2 CONNECTION   | PGM3 CONNECTION   | S7, S5, S9   | S10, S11, S12   |   SENSE VOLTAGE IN TRICKLE (mV) |
|-----------------|-----------------------|---------------|-------------------|-------------------|--------------|-----------------|---------------------------------|
|              22 |                    21 | Off           | Open              | V+                | -            | S12             |                               4 |
|              22 |                    21 | On            | REF               | V+                | S7           | S12             |                               4 |
|              33 |                    21 | Off           | V+                | V+                | S9           | S12             |                               4 |
|              33 |                    21 | On            | BATT-             | V+                | S8           | S12             |                               4 |
|              45 |                    42 | Off           | Open              | Open              | -            | -               |                               8 |
|              45 |                    42 | On            | REF               | Open              | S7           | -               |                               8 |
|              66 |                    42 | Off           | V+                | Open              | S9           | -               |                               8 |
|              66 |                    42 | On            | BATT-             | Open              | S8           | -               |                               8 |
|              90 |                    84 | Off           | Open              | REF               | -            | S10             |                              16 |
|              90 |                    84 | On            | REF               | REF               | S7           | S10             |                              16 |
|             132 |                    84 | Off           | V+                | REF               | S9           | S10             |                              16 |
|             132 |                    84 | On            | BATT-             | REF               | S8           | S10             |                              16 |
|             180 |                   168 | Off           | Open              | BATT-             | -            | S11             |                              32 |
|             180 |                   168 | On            | REF               | BATT-             | S7           | S11             |                              32 |
|             264 |                   168 | Off           | V+                | BATT-             | S9           | S11             |                              32 |
|             264 |                   168 | On            | BATT-             | BATT-             | S8           | S11             |                              32 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Thermistor TR3 detects when the temperature is too cold to  fast  charge the battery. Before charging has started, TEMP will equal 1.0V since the battery temperature will be the same as ambient. At 0°C, TR3 has 33k Ω resistance. Setting R8 to 33k Ω inhibits fast charging for temperatures below 0°C, since TR3's resistance will be greater than 33k Ω at  temperatures below 0°C and thus the voltage at TLO will be greater than 1.0V.

If  the  MAX712/MAX713's temperature detection features are not used, do not forget to disable the temperature comparators by tying THI = V+ and TLO = BATT-. TEMP should be connected to a voltage divider consisting of a 68k Ω resistor to VREF, and a 22k Ω resistor to BATT-. Refer to the Typical Operating Circuit of the MAX712/ MAX713 data sheet.

## MAX712 Linear-Mode Evaluation Kit

Table 4. Programming the Number of Cells

| NUMBER OF CELLS   | PGM0 CONN               | PGM1 CONN         | S1-S3               | S4-S6      |
|-------------------|-------------------------|-------------------|---------------------|------------|
| 1 2 3 4           | V+ V+ V+ V+             | V+ Open REF BATT- | S3 S3 S3 S3         | S6 - S4 S5 |
| 5 6 7 8           | Open Open Open Open     | V+ Open REF BATT- | Open Open Open Open | S6 - S4 S5 |
| 9 10 11 12        | REF REF REF REF         | V+ Open REF BATT- | S1 S1 S1 S1         | S6 - S4 S5 |
| 13 14 15 16       | BATT- BATT- BATT- BATT- | V+ Open REF BATT- | S2 S2 S2 S2         | S6 - S4 S5 |

## Table 5. Trickle-Charge Sense-Voltage Selection

| PGM3   | S10-S12   |   SENSE VOLTAGE (mV) |
|--------|-----------|----------------------|
| V+     | S12       |                    4 |
| Open   | -         |                    8 |
| REF    | S10       |                   16 |
| BATT-  | S11       |                   32 |

## Table 6. Factory Settings Before Shipment

| Number of Cells                 | 2       |
|---------------------------------|---------|
| Timeout                         | 264 min |
| ADC Interval                    | 168 s   |
| Fast-Charge Current             | 250mA   |
| Trickle-Charge Current          | 32mA    |
| Battery Temperature Rise Cutoff | +15°C   |
| V LIMIT                         | 2.0V    |

## Table 7. Evaluation Board Switch Settings for Charging Two NiCd AA Cells (Preshipment Settings)

| SWITCH A (SWA)             | ON SWITCHES (ALL OTHERS OFF)   | FUNCTION                                          |
|----------------------------|--------------------------------|---------------------------------------------------|
| PGM0 = V+, PGM1 = Open     | S3, -                          | Indicates two cells                               |
| PGM2 = BATT-, PGM3 = BATT- | S8, S11                        | 264min timeout, 168s ADC interval, slope limit on |
| SWITCH B (SWB)             | SWITCH B (SWB)                 | SWITCH B (SWB)                                    |
| S1                         | R SENSE = 1.0 Ω                | Fast-charge current = 250mA                       |
| JUMPER J1                  | JUMPER J1                      | JUMPER J1                                         |
| J1                         | 1 & 2                          | Set for charging two AA batteries                 |

## Table 8.  Voltage Values

| VOLTAGE   |   VALUE | FUNCTION                                                                                                                                                                                                                                                                                                                     |
|-----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VREF      |    2.00 | Internal fixed reference voltage                                                                                                                                                                                                                                                                                             |
| VLIMIT    |    2.00 | Sets maximum charging voltage; R6 is adjusted to set the level. Set VLIMIT to VREF for normal operation.                                                                                                                                                                                                                     |
| VTHI      |    1.33 | High-temperature trip voltage. Fast charge ceases when the TEMP pin exceeds this voltage. R7 is adjusted to set the level.                                                                                                                                                                                                   |
| VTLO      |    0.66 | Low-temperature trip voltage. Fast charge will not start when the TEMP pin is below this voltage. R8 is adjusted to set the level.                                                                                                                                                                                           |
| VTEMP     |    1.00 | This voltage is 1/2 of VREF as long as the two thermistors, TR1 and TR2, are at the same temperature. A Typical Operating Characteristics graph in the MAX712/ MAX713 data sheet shows how this voltage will vary with battery temperature. TR1 must be in contact with the battery casing to sense the battery temperature. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX712 Linear-Mode Evaluation Kit

Figure 1. MAX712 Linear-Mode EV Kit Schematic

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6