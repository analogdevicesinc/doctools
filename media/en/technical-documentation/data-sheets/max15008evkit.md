<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX15008 evaluation kit (EV kit) is a complete, fully assembled and tested printed-circuit board (PCB) that  demonstrates the capabilities of the MAX15008. The MAX15008 features a configurable LDO voltage regulator, a voltage tracker, and an overvoltage protector.  The  LDO is  configured to 5V, 300mA output. The voltage tracker is configured to track the LDO output voltage and provides up to 50mA. The overvoltage protector threshold is configured to 17.7V.

The EV kit circuit features a RESET output signal to indicate output fault and normal operating conditions. The EV kit circuit  board can also be used to evaluate the MAX15009, MAX15010 † , or MAX15011 † ICs.

† Future product-contact factory for availability.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 50V aluminum electrolytic capacitor (C case) Panasonic EEEFK1H100UR                |
| C2            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K                               |
| C3            |     1 | 0.15µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E154K                              |
| C4            |     1 | 3.3µF ±20%, 50V X7R ceramic capacitor (1210) TDK C3225X7R1H335M                               |
| C5            |     1 | 22µF ±20%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61C226M or Taiyo Yuden EMK316BJ226M |
| C6            |     1 | 10µF ±20%, 35V aluminum electrolytic capacitor (B case) Panasonic EEEFK1V100UR                |
| C7            |     1 | 22µF ±20%, 50V aluminum electrolytic capacitor (D case) Panasonic EEEFK1H220P                 |

## Features

- ♦ Wide Operating Supply Voltage Range: 5V to 40V
- ♦ 300mA LDO Configured to 5V (Supply Voltage ≥ 6.5V)
- ♦ 50mA Voltage Tracker
- ♦ Configurable Overvoltage Protector Threshold
- ♦ Output Signal ( RESET ) for Circuit Monitoring
- ♦ Can be Used to Evaluate the MAX15009, MAX15010 † , or MAX15011 † ICs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15008EVKIT+ | EV Kit |

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                              |
|----------------------|-------|----------------------------------------------------------|
| C8, C9, C10          |     0 | Not installed, ceramic capacitors (0603)                 |
| C11, C13             |     0 | Not installed, aluminum electrolytic capacitors (D case) |
| C12                  |     0 | Not installed, ceramic capacitor (1210)                  |
| D1                   |     1 | 54V, 5W TVS diode (SMB) Diodes Inc. SMBJ54A              |
| JU1-JU4              |     4 | 2-pin headers                                            |
| N1                   |     1 | 100V, 44A n-channel MOSFET (D pack) Fairchild FDD3672    |
| R1, R4, R6, R12-R15  |     0 | Not installed, resistors (0603)                          |
| R2                   |     1 | 0 Ω ±5% resistor (0603)                                  |
| R3, R5, R8, R10, R11 |     5 | 10k Ω ±1% resistors (0603)                               |
| R7, R9               |     2 | 133k Ω ±1% resistors (0603)                              |
| U1                   |     1 | MAX15008ATJ+ (32-pin TQFN-EP)                            |
| -                    |     4 | Shunts (JU1-JU4)                                         |
| -                    |     1 | PCB: MAX15008 Evaluation Kit+                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX15008 Evaluation Kit

## Quick Start

## Recommended Equipment

- Two 5V to 40V, 1A adjustable power supplies
- Four voltmeters
- 11) Verify that the OUT\_PROTECT output measures 10V.
- 12) Verify that the RESET output signal measures 5V.
- 13) The EV kit is ready for further testing.

## Detailed Description

The MAX15008 EV kit is a fully assembled and tested circuit that demonstrates the capabilities of the MAX15008. The MAX15008 features a configurable LDO voltage regulator, a voltage tracker, and an overvoltage protector. The LDO is configured to 5V and provides up to 300mA. The voltage tracker is configured to track the LDO output voltage and provides up to 50mA. The overvoltage protector threshold is configured to 17.7V with resistors R9 and R10. The LDO output voltage is configured with external resistors R1 and R2. The tracker output voltage can be configured to track a wide range of voltages up to 35V by replacing resistors R3-R6. The EV kit input-voltage range is up to 40V, but may have to be decreased to not exceed the maximum continuous power dissipation rating of the MAX15008 IC.

The EV kit RESET output signal can be used to monitor the LDO output operating conditions or to reset circuitry connected at the LDO output.

## Input Power Supplies

The MAX15008 EV kit requires an input power source of 5V to 40V, 1A connected across IN and SGND and another 5V to 40V, 1A power source connected across TRACK and SGND for normal operation. The power source connected to IN supplies power to the MAX15008 IC, the LDO input, and the overvoltage protector input, while the power source connected to TRACK supplies power to the tracker input. The overvoltage protector input (IN2) can be separated from the main input (IN) by cutting open the shorting trace between the IN and IN2 PCB pads. Connect a separate power supply across the IN2 and PGND PCB pads and install a 4.7µF to 10µF electrolytic capacitor at C11. In order to evaluate the LDO performance at 5V output, never set the IN supply voltage below 6.5V.

## Component Suppliers

| SUPPLIER                 | PHONE        | WEBSITE               |
|--------------------------|--------------|-----------------------|
| Diodes Inc.              | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductors | 888-522-5372 | www.fairchildsemi.com |
| Murata Mfg. Co., Ltd.    | 770-436-1300 | www.murata.com        |
| Panasonic Corp.          | 800-344-2112 | www.panasonic.com     |
| Taiyo Yuden              | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.                | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX15008 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The MAX15008 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed across jumpers JU1 (LDO enabled), JU2 ( HOLD enabled), JU3 (tracker enabled), and JU4 (overvoltage protector enabled).
- 2) Set the first  power supply to 10V and disable the output. Connect the positive terminal of this power supply to the IN PCB pad. Connect the ground terminal of this power supply to the SGND PCB pad located next to the IN pad.
- 3) Set the second power supply to 8V and disable the output. Connect the positive terminal of this power supply to the TRACK PCB pad. Connect the ground terminal of this power supply to the SGND PCB pad located next to the TRACK pad.
- 4) Connect a voltmeter across the OUT\_LDO and SGND PCB pads.
- 5) Connect a voltmeter across the OUT\_TRK and SGND PCB pads.
- 6) Connect a voltmeter across the OUT\_PROTECT and PGND PCB pads.
- 7) Connect a voltmeter across the RESET and SGND PCB pads.
- 8) Turn on the IN and TRACK power supplies.
- 9) Verify that the OUT\_LDO output measures 5V.
- 10) Verify that the OUT\_TRK output measures 5V.

<!-- image -->

## MAX15008 Evaluation Kit

## LDO Regulator

The MAX15008 EV kit's 300mA LDO output (OUT\_LDO) is configured to the 5V default output voltage by resistor R2, which connects the FB\_LDO pin to SGND. The LDO input  accepts  a  power  source  up  to  40V. However, operating the LDO at maximum conditions can exceed the maximum continuous power dissipation rating  of  the  MAX15008 IC. This will cause the IC to shut down after exceeding the internal thermal shutdown threshold. The LDO output voltage can be reconfigured between 1.8V and 11V by removing the 0 Ω R2 resistor  and  installing  resistors  at  R1  and  R2.  Use  the following equation to select new resistor values:

<!-- formula-not-decoded -->

where R2 is less than 50k Ω and OUT\_LDO is the desired LDO output voltage.

Table 1. LDO Control Logic (Jumpers JU1 and JU2)

| OPERATION STATE   | SHUNT STATUS (JU1 - EN_LDO)   | SHUNT STATUS (JU2 - HOLD )   | LDO OUTPUT   | OPERATING CONDITIONS                                                                          |
|-------------------|-------------------------------|------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| Initial Power On  | Not installed                 | X                            | Disabled     | EN_LDO pin is connected to ground SGND through an internal pulldown                           |
| Initial Power On  | Installed                     | X                            | Enabled      | EN_LDO pin is connected to IN                                                                 |
| Hold Setup        | Installed                     | Installed                    | Enabled      | Shunt is installed on jumper JU2, while shunt on jumper JU1 is in the installed state         |
| Hold              | Not installed                 | Installed                    | Enabled      | LDO remains enabled if the shunt is removed from jumper JU1                                   |
| Off               | Not installed                 | Not installed*               | Disabled     | LDO is disabled if shunt on jumper JU2 is removed, while shunt on jumper JU1 is not installed |

X = Don't care.

*The HOLD pin is internally driven to OUT\_LDO if the shunt on jumper JU2 is not installed.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## LDO Control Logic

The MAX15008 LDO features two logic inputs (EN\_LDO and HOLD )  to  enable  or  disable  the  output  during power-on or normal operating conditions. The EV kit features jumpers JU1 and JU2, which can be used to set  the  EN\_LDO and HOLD input pins, respectively. See Table 1 for jumpers JU1 and JU2 configuration.

## MAX15008 Evaluation Kit

## Voltage Tracker

The MAX15008 voltage tracker input power supply, of up to 40V, must be connected to the TRACK PCB pad. The tracker output (OUT\_TRK) can source up to 50mA and is configured to track the OUT\_LDO output voltage by connecting the ADJ pin to OUT\_LDO through resistor R3, and connecting the FB\_TRK pin to OUT\_TRACK through resistor R5. The ADJ pin voltage setting sets the  feedback tracker voltage threshold at the FB\_TRK pin. This feature offers the flexibility of setting the tracker output at a lower, equal to, or higher than OUT\_LDO output voltage. Use the following equations to select new resistor values for R3-R6 to reconfigure the OUT\_TRACK tracking voltage:

<!-- formula-not-decoded -->

where OUT\_LDO is the LDO output voltage, VADJ is the voltage setting at the ADJ pin, VFB\_TRK is the feedback voltage, which equals the voltage set at the ADJ pin, and OUT\_TRK is the new tracking voltage. VADJ must be greater than 1.1V and less than TRACK - 0.5V. If installed, resistors R4 and R6 must be less than or equal to 50k Ω .  VADJ can be set to 1.235V by installing a 0 Ω (0603 size) surface-mount resistor at R13. If the tracker output-voltage setting exceeds 35V, capacitor C6 must be replaced with a higher voltage-rated capacitor.

## Voltage Tracker Enable

The voltage tracker can be enabled or disabled by configuring jumper JU3. See Table 2 for jumper JU3 configuration.

## Table 2. Voltage Tracker (Jumper JU3)

| SHUNT STATUS   | EN_TRK PIN                                      | VOLTAGE TRACKER   |
|----------------|-------------------------------------------------|-------------------|
| Installed      | Connected to IN                                 | Enabled           |
| Not installed  | Connected to ground SGND with internal pulldown | Disabled          |

## Overvoltage Protector

The MAX15008 EV kit overvoltage protector is configured to operate in overvoltage switch mode. When the circuit detects an overvoltage condition at the IN2 input (or IN if IN2 is not separated from IN), the IC turns off nchannel MOSFET N1 to isolate the power source from the load. When the voltage at the IN2 input decreases below the overvoltage threshold, the MAX15008 turns on N1, reconnecting the power source to the load. The overvoltage threshold is configured to 17.7V by resistors  R9  and  R10.  Use  the  following  equation  to  select new resistor values to modify the overvoltage switch mode overvoltage threshold:

<!-- formula-not-decoded -->

where R10 is typically 10k Ω and OUT\_PROTECT is the desired overvoltage threshold.

The EV kit overvoltage protector can be reconfigured to operate in overvoltage-limiter mode by cutting open the shorting trace at resistor R15 and installing a 0 Ω resistor at R14. In this mode, when the circuit detects an overvoltage condition at the output load (OUT\_PROTECT), the IC turns off N1 until the load lowers the OUT\_PROTECT voltage below the overvoltage threshold. If the IN2 voltage is greater than the overvoltage threshold, the IC will attempt to regulate the OUT\_PROTECT voltage around this threshold.

The overvoltage threshold for overvoltage-limiter mode operation is configured to 17.7V by resistors R7 and R8. Use the following equation to select new resistor values to modify the overvoltage-limiter mode overvoltage threshold:

<!-- formula-not-decoded -->

where R8 is typically 10k Ω and OUT\_PROTECT is the new overvoltage threshold. Exercise caution when operating the overvoltage protector in overvoltagelimiter  mode. Refer to the Overvoltage-Limiter Mode section in the MAX15008/MAX15010 IC data sheet for details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15008 Evaluation Kit

Note: The overvoltage protector does not provide current-limiting protection. Verify that the IN2 input supply current is limited, according to the OUT\_PROTECT load, and that the current ripple rating of capacitors C7 and C11, which is recommended for separate power operation, is not exceeded.

## Evaluating the MAX15009, MAX15010, and MAX15011

## Overvoltage Protector Enable

The overvoltage protector can be enabled or disabled by configuring jumper JU4. See Table 3 for jumper JU4 configuration.

## Table 3. Overvoltage Protector (Jumper JU4)

| SHUNT STATUS   | EN_PROT PIN                                     | OVERVOLTAGE PROTECTOR   |
|----------------|-------------------------------------------------|-------------------------|
| Installed      | Connected to IN                                 | Enabled                 |
| Not installed  | Connected to ground SGND with internal pulldown | Disabled                |

## RESET Timeout Period

The MAX15008 EV kit features output signal RESET for monitoring output OUT\_LDO. The RESET output is asserted high (OUT\_LDO voltage) when output OUT\_LDO exceeds the voltage threshold of 92.5% of the programmed output voltage for the configured timeout period (tTIMEOUT) of 93ms. Replacing capacitor C3 with  a  different  value  reconfigures  the  timeout  period. Use the following equation to select a new capacitor value for C3 when adjusting the timeout period:

<!-- formula-not-decoded -->

where tTIMEOUT is in seconds (s) and C3 is the new capacitor value in farads.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX15008 EV kit PCB can be used to evaluate the MAX15009, MAX15010, or MAX15011 ICs. Remove the MAX15008 IC (U1) and replace it with any of the three ICs. The MAX15010 IC integrates the same functions as the MAX15008 minus the overvoltage protector. The MAX15009 IC integrates an LDO, a switched output, and an overvoltage protector. The MAX15011 IC integrates the same functions as the MAX15009, minus the overvoltage protector. When evaluating the MAX15009 or MAX15011 ICs, components C8, C10, and R12 must be installed. Refer to the MAX15008/MAX15010 or the MAX15009/MAX15011 IC data sheets for a complete description of part-to-part differences and configuration.

When evaluating the MAX15010 or MAX15011, it is recommended either to cut the trace connecting the IN PCB pad to the IN2 PCB pad (drain of MOSFET N1), or to connect the gate of N1 to ground by installing a lowvalue (0603 size) resistor across the C9 PCB pads. Also, remove resistor R9 to prevent current leakage from the IN input.

## MAX15008 Evaluation Kit

Figure 1. MAX15008 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15008 Evaluation Kit

<!-- image -->

<!-- image -->

Figure 2. MAX15008 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX15008 EV Kit PCB Layout-Ground Layer (Layer 2)

Figure 3. MAX15008 EV Kit PCB Layout-Component Side (Layer 1)

<!-- image -->

Figure 5. MAX15008 EV Kit PCB Layout-Ground and Signal Layer (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15008 Evaluation Kit

Figure 6. MAX15008 EV Kit PCB Layout-Solder Side (Layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

Boblet