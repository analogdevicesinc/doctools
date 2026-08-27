<!-- lastmod 2019-11-14 -->
<!-- image -->

## Silicon Anomaly

## Robust, Industrial, Low Power,

## 10 Mbps and 100 Mbps Ethernet PHY

[ADIN1200](https://www.analog.com/ADIN1200?doc=ADIN1200-Silicon-Anomaly.pdf)

This anomaly list describes the known bugs, anomalies, and workarounds for the ADIN1200 Revision U1 silicon. The items listed apply to all packaged material that is branded as follows:

First Line

ADIN1200 (device identifier)

Second Line

CCBZ or BCBZ

Third Line

#1842 onward (Pb-free, date code, year, and week)

Fourth Line

Nine-digit lot ID (assembly lot code)

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improve silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined here.

## ADIN1200 FUNCTIONALITY ISSUES

| Silicon Revision Identifier                                                            | Silicon Status   | AnomalySheet   |   Number of Reported Anomalies |
|----------------------------------------------------------------------------------------|------------------|----------------|--------------------------------|
| Revision identifier is 0 and can be read from the PHY_ID_2 register, REV_NUM bit field | Released         | Rev. 0         |                              2 |

<!-- image -->

## FUNCTIONALITY ISSUES

## Table 1. PHY Linking-Automatic MDIX [er001]

| Background     | The ADIN1200 PHY devices may experience longer link times or issues linking, when two ADIN1200 devices at either end of the link have identical hardware configuration settings of automatic media dependent interface crossover (auto MDIX), have matching PHY addresses, and the PHY devices are powered up or released from a hardware reset at the same time (within 60 ms).                                                                                                                                                                        |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | The behavior arises from a synchronization issue between the PHY devices, when they are powered up or released from a hardware reset at the same time. This issue results in the autocrossover sequence being synchronized between both devices and changing at approximately the same time. Where no crossover cable is present between the PHYs, both PHYs use the same wire pair to transmit and same wire pair to receive, thereby not seeing the transmissions of the other to resolve the media dependent interface (MDI) until they drift apart. |
| Workaround     | There are multiple interim ways of avoiding this behavior. Any one of the following options is sufficient to mitigate risk of longer link times or nonlinking for this version of silicon:                                                                                                                                                                                                                                                                                                                                                              |
|                | • Configure the PHYs with different PHY addresses by hardware pin configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                | • Configure the PHYs with different automatic MDIX/MDI settings by hardware pin configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                | • Configure the PHYs with different master/slave settings by hardware pin configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                | • Power the PHYs and release them from hardware reset >60 ms apart.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                | • Use software to change the MDIX/MDI setting or issue a reset to the PHY.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Related Issues | PHY linking-1000BASE-T master/slave.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Table 2. INT\_N/CRS Pin Operation During Reset [er002]

| Background     | The INT_N/CRS pin is not deasserted during I/O pin configuration (while RESET_N is low). This behavior is observed as the INT_N/CRS pin is being driven low while RESET_N is low and is observed for all media access control (MAC) interface configurations.   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | The output enable on this pin is not being deasserted during I/O pin configuration.                                                                                                                                                                             |
| Workaround     | None.                                                                                                                                                                                                                                                           |
| Related Issues | None.                                                                                                                                                                                                                                                           |

## SECTION 1. ADIN1200 FUNCTIONALITY ISSUES

| Reference Number   | Description                                                                                                                                            | Status   |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| er001              | Longer link times or issues linking when two ADIN1200 devices at either end of the link have identical automatic MDIX hardware configuration settings. | Open     |
| er002              | INT_N/CRS state while RESET_N is low.                                                                                                                  | Open     |

<!-- image -->